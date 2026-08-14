import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = '/home/ubuntu/smartstaker-site';
const componentPath = path.join(projectRoot, 'client/src/components/LiteralMirror.tsx');
const embeddedMirrorsPath = path.join(projectRoot, 'client/src/lib/embeddedMirrors.ts');
const reportPath = path.join(projectRoot, 'image-path-audit.json');
const previewOrigin = 'https://3000-i94g7mfdr6guzlpq6qv1x-d317d73d.sg1.manus.computer';
const referenceOrigin = 'https://sspilot.cc';

const source = await readFile(componentPath, 'utf8');
const embeddedSource = await readFile(embeddedMirrorsPath, 'utf8');
const mappingBlock = source.match(/const recoveredReferencePhotos:[\s\S]*?= \{([\s\S]*?)\n\};/);
if (!mappingBlock) throw new Error('Could not locate recoveredReferencePhotos map.');

const mappings = Array.from(
  mappingBlock[1].matchAll(/^\s*"([^"]+)":\s*"([^"]+)",?$/gm),
  ([, referencePath, hostedPath]) => ({ referencePath, hostedPath }),
);

const mappingByReferencePath = new Map(mappings.map((mapping) => [mapping.referencePath, mapping.hostedPath]));

function resolveVisualPath(value) {
  if (!value || value.startsWith('#') || value.startsWith('data:') || value.startsWith('blob:')) return value;
  const target = new URL(value.replaceAll('&amp;', '&'), `${referenceOrigin}/`);
  const nextImagePath = target.pathname === '/_next/image' ? target.searchParams.get('url') : null;
  return (nextImagePath && mappingByReferencePath.get(nextImagePath)) || mappingByReferencePath.get(target.pathname) || target.href;
}

const decodedEmbeddedSource = embeddedSource.replaceAll('\\"', '"').replaceAll('\\n', '\n');
const imageReferencePatterns = [
  /\b(?:src|poster)="([^"]+)"/g,
  /\b(?:src|poster)='([^']+)'/g,
  /url\((?:"|')?([^\s"')]+)(?:"|')?\)/g,
];
const capturedImageReferences = new Set();
for (const pattern of imageReferencePatterns) {
  for (const match of decodedEmbeddedSource.matchAll(pattern)) capturedImageReferences.add(match[1]);
}

const capturedImagePaths = Array.from(capturedImageReferences)
  .map((referencePath) => ({ referencePath, resolvedPath: resolveVisualPath(referencePath) }))
  .filter(({ resolvedPath }) => resolvedPath && !resolvedPath.startsWith('data:') && !resolvedPath.startsWith('blob:'));

const results = [];
const checkedPaths = new Map();
for (const mapping of mappings) checkedPaths.set(mapping.hostedPath, mapping.referencePath);
for (const capturedPath of capturedImagePaths) checkedPaths.set(capturedPath.resolvedPath, capturedPath.referencePath);

for (const [resolvedPath, referencePath] of checkedPaths) {
  const url = new URL(resolvedPath, previewOrigin).href;
  try {
    const response = await fetch(url, { redirect: 'follow' });
    const contentType = response.headers.get('content-type') || '';
    const contentLength = Number(response.headers.get('content-length') || 0);
    results.push({
      referencePath,
      resolvedPath,
      url,
      status: response.status,
      contentType,
      contentLength,
      ok: response.ok && contentType.startsWith('image/'),
    });
  } catch (error) {
    results.push({ referencePath, resolvedPath, url, status: 0, contentType: '', contentLength: 0, ok: false, error: String(error) });
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  previewOrigin,
  explicitHostedMappings: mappings.length,
  capturedImageReferences: capturedImagePaths.length,
  checked: results.length,
  passing: results.filter((result) => result.ok).length,
  failing: results.filter((result) => !result.ok).length,
  results,
};

await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

if (report.failing) process.exitCode = 1;
