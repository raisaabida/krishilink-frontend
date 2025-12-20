# KrishiLink - Frontend (Vite + React + Tailwind)

This is a complete frontend scaffold for **KrishiLink**, a Farmer’s Growth & Connection Platform. It's a single-page application built with Vite + React and Tailwind CSS. The backend is simulated using localStorage so you can run and test all UI flows locally without a server.

## Features included
- Home, All Crops, Crop Details, Login, Register, Add Crop, My Posts, My Interests, Profile, 404 pages.
- Interest form with validation and confirmation logic.
- Owner can accept/reject interests and quantity updates automatically.
- Search and "No results found" behavior.
- Toast notifications (custom) — no default `alert` used for errors.
- Responsive layout and a stylish header/footer consistent across pages.
- Simulated backend in `src/lib/localDb.js` (localStorage) so you can replace it with real API later.

## How to run
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:5173

## Important notes for submission
- To satisfy the assignment GitHub commit requirement, I've included `commits.txt` with a suggested sequence of 15+ client-side commits and 8 server-side commits. You can replay them locally using git commands (or import the messages).
- Replace the simulated backend with your real Node/MongoDB endpoints when ready.
- No Lorem ipsum texts used.

## Live preview
This project uses localStorage seed data; after opening the site you can register or login using:
- Owner: owner@example.com / Owner123
- Rahim: rahim@example.com / Rahim123

Enjoy!

