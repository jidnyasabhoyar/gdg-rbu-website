# GDG RBU — Figma-based React website

A responsive React + Vite website recreating the supplied GDG RBU Figma reference. The original layout, palette, bold outlines, event cards, team section, FAQ, footer, and team image are retained, with an added subtle animation layer and interaction states.

## Run locally
1. Install Node.js (LTS) if needed: https://nodejs.org/
2. Open this folder in VS Code.
3. In the VS Code terminal, run `npm install`.
4. Run `npm run dev` and open the local URL Vite prints.
5. Test the production build with `npm run build`.

## Publish online (Vercel)
1. Create a GitHub repository and upload the contents of this folder (not the outer ZIP folder).
2. Sign in to https://vercel.com/ and choose **Add New → Project**.
3. Import your GitHub repository.
4. Keep the framework as **Vite**. Build command: `npm run build`; output directory: `dist`.
5. Click **Deploy**. Vercel will provide a public URL.

You can also deploy the `dist` folder to Netlify after running `npm run build`.

## Before final public launch
- Replace `public/team-photo.png` with the original high-resolution photo exported from Figma if available.
- Confirm the event date/time and registration destination with the GDG RBU team.
- Replace the generic social URLs with the team's official social profile URLs.
- Confirm the team/profile label in the top-right matches the intended design/content.
