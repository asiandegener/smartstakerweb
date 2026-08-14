/**
 * STYLE REMINDER — Terminal Ledger routing keeps the full public reference-style route set
 * inside one persistent technical shell, with every external-looking action remaining local.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SiteShell } from "@/components/SiteShell";
import { Route, Switch, useParams } from "wouter";
import Home from "@/pages/Home";
import ProductPage from "@/pages/ProductPage";
import { ArticlePage, BlogIndex } from "@/pages/Blog";
import { LegalPage } from "@/pages/Legal";
import NotFound from "@/pages/NotFound";

function ProductRoute() {
  const { productSlug } = useParams<{ productSlug: string }>();
  return <ProductPage slug={productSlug} />;
}

function ArticleRoute() {
  const { slug } = useParams<{ slug: string }>();
  return <ArticlePage slug={slug} />;
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/blog" component={BlogIndex} />
    <Route path="/blog/:slug" component={ArticleRoute} />
    <Route path="/privacy"><LegalPage type="privacy" /></Route>
    <Route path="/terms"><LegalPage type="terms" /></Route>
    <Route path="/:productSlug" component={ProductRoute} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><TooltipProvider><SiteShell><Router /></SiteShell><Toaster theme="dark" position="bottom-right" richColors /></TooltipProvider></ErrorBoundary>;
}
