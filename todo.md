# SmartStaker Delivery Checklist

- [x] Create the branded SmartStaker logo, favicon concept, and visual system assets.
- [x] Build the homepage with hero, capabilities, workflow, product cards, FAQ, guides preview, and independent-product footer.
- [x] Build the main product routes: `/stake-bot`, `/stake-strategy`, `/stake-stats`, `/stake-code-claimer`, `/stake-reload-claimer`, `/stake-slots`, and `/ssprf`.
- [x] Build the game routes: `/stake-dice`, `/stake-limbo`, `/stake-mines`, and `/stake-plinko`.
- [x] Build the content routes: `/blog`, representative guide pages, `/privacy`, and `/terms`.
- [x] Add desktop/mobile navigation, theme behavior, route links, accessible FAQ accordions, and honest preview notices for non-live actions.
- [x] Verify every public route on desktop and mobile with the development preview.
- [x] Copy the finished website into the Git repository, commit the work, and push a new branch.

## High-Fidelity SSPilot Parity Revision

- [x] Audit every reference route against the live SSPilot layout, header, footer, copy hierarchy, and section order.
- [x] Replace the Terminal Ledger interpretation with a SmartStaker-branded recreation of the reference visual system and page geometry.
- [x] Rebuild shared navigation, hero, product, FAQ, legal, and blog templates to preserve reference-page rhythm and responsiveness.
- [x] Validate SmartStaker parity on desktop and mobile against the live reference, then update the `smartstaker-rebuild` branch.

## Literal Copy Parity Revision

- [x] Capture every public reference page’s exact headings, paragraphs, labels, FAQs, legal text, metadata, and section sequence.
- [x] Replace SmartStaker’s rewritten copy with the captured reference wording, changing only `SSPilot` brand identifiers to `SmartStaker`.
- [x] Compare all rendered SmartStaker routes against the reference for word-level and section-order parity.
- [x] Commit and push the literal-copy revision to `smartstaker-rebuild`.

## Rendered Parity Correction

- [x] Capture comparable live desktop and mobile states from SSPilot and SmartStaker for the homepage, product, blog, and legal routes.
- [x] Document the specific visual, interaction, and route behavior differences in the rendered pages.
- [x] Replace the iframe mirror approach where it causes a visible mismatch, then implement the corrected reference-faithful rendering.
- [x] Validate all corrected routes against the live reference and push the visual-parity fix to `smartstaker-rebuild`.

## User-Reported Remaining Parity Failure

- [x] Capture a viewport-matched comparison of the live SSPilot page and SmartStaker page in the connected browser.
- [x] Identify the precise user-visible difference in layout, theme, assets, navigation, or behavior that remains after the dark-mode embedded-mirror correction.
- [x] Replace or repair the current rendering architecture until the critical routes visibly match the live reference.
- [x] Re-test the corrected result with the user-visible browser, checkpoint it, and update `smartstaker-rebuild`.

## Missing Reference Photos

- [x] Compare the live SSPilot image-bearing sections against SmartStaker and inventory every missing or failed visual asset.
- [x] Retrieve or reliably rehost the missing reference visual assets without changing their composition or placement.
- [x] Confirm the restored images render at the same desktop and mobile breakpoints as the live reference.
- [x] Checkpoint and push the completed image-asset correction to `smartstaker-rebuild`.

## User-Supplied Screenshot Coverage

- [x] Compare the current SmartStaker visual map with each supplied product screenshot and identify every missing carousel slide or panel assignment.
- [x] Store each supplied screenshot in durable project storage and map it to its exact captured reference image path.
- [x] Verify every supplied product screenshot appears in its matching SmartStaker carousel or feature position on desktop and mobile.
- [x] Checkpoint and push the completed authoritative-screenshot correction to `smartstaker-rebuild`.

## Runtime Screenshot Rendering Failure

- [x] Inspect the live carousel DOM, active-slide state, and image network requests in the user-facing SmartStaker page.
- [x] Identify the exact runtime cause preventing a supplied screenshot from becoming visible.
- [x] Repair the active slide’s image rendering and verify the restored slide-control selectors and visible image output.
- [x] Checkpoint and push the browser-verified runtime image fix to `smartstaker-rebuild`.

## Visual Edit Result Verification

- [x] Inspect the empty visual-edit result payload and the currently relevant SmartStaker source files for unrecorded changes.
- [x] Validate the live desktop and mobile rendering to determine whether a manual repair is required.
- [x] Create a checkpoint of the verified visual-edit state.

## User-Visible Unchanged Page Investigation

- [ ] Identify the exact route, visual region, and environment in which SmartStaker still appears unchanged to the user.
- [ ] Trace the active preview, Git branch, cache state, and image/carousel delivery path for that page.
- [ ] Apply a concrete, user-visible correction to the affected carousel or visual section.
- [ ] Verify the changed visible state in the same user-facing context, then checkpoint and push it.

## Comprehensive Image-Path Audit

- [x] Inventory every explicit SmartStaker-hosted image mapping and captured image reference used by the renderer.
- [x] Validate each resolved image URL from the active preview and identify non-success or unexpected responses.
- [x] Confirm no broken mappings, source-normalization failures, or fallback repairs are required while preserving the captured visual composition.
- [x] Confirm the verified paths visibly load on representative desktop and mobile routes.
- [x] Checkpoint and push the verified image-path correction to the separate `smartstaker-rebuild` branch.
