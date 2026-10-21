# Amrit Jal structure cleanup

## Changes made
- Added `src/layouts/MainLayout.jsx` so Navbar and Footer are defined once.
- Added `src/pages/Home.jsx` to keep homepage sections together.
- Simplified `src/App.jsx` with nested React Router routes.
- Added `src/pages/NotFound.jsx` for unknown URLs.
- Preserved existing page/component files, assets, CartProvider, and the `/Amrit-Jal` deployment basename.

## Run locally
1. Install Node.js if needed.
2. Run `npm install` in this folder.
3. Run `npm run dev`.
4. Check production compilation with `npm run build`.

## Important follow-up
The existing Navbar/Footer contain some plain hash links (for example `/#process` and `#products`). These should be adjusted and tested with the `/Amrit-Jal` basename so section links also work correctly when clicked from another route. This refactor intentionally leaves the individual UI components unchanged.
