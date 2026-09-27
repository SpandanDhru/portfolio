# Spandan Dhru — Portfolio

My personal site: a single page with a voxel yeti coding at its desk, my work history, projects, skills and resume.

**Live:** https://spandandhru.github.io/portfolio/

The page is plain HTML, CSS and JavaScript with no framework. The 3D scenes are built from boxes with [Three.js](https://threejs.org/) (r128, loaded from cdnjs), and [Vite](https://vite.dev/) is used only as a dev server and for the production build.

## Running locally

```bash
npm install
npm run dev       # http://127.0.0.1:5173 — reloads on save
```

Serve the page over HTTP (as above) rather than opening `index.html` from disk; the icons, posters and resume load by relative path.

## Building

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ to check the build
```

## Deployment

The site is hosted on GitHub Pages. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`. Progress shows in the repo's **Actions** tab, and the live site updates a minute or two after the run finishes.

`vite.config.js` sets `base: './'` so all asset paths are relative. The build works at `/portfolio/` today and would keep working unchanged on a custom domain.

If the URL ever changes (for example, a custom domain), update the `og:url` and `og:image` tags in `index.html`. Link-preview crawlers need a full URL for the image. After deploying, paste the URL into [LinkedIn's Post Inspector](https://www.linkedin.com/post-inspector/) to refresh its cached preview.

## Project layout

```
index.html                  the whole site: markup, styles and scripts
vite.config.js              build config (relative asset paths)
.github/workflows/          GitHub Pages deploy workflow
favicon.svg                 pixel yeti, also used as the navbar logo
icons/                      skill and tech logos
public/resume.pdf           the downloadable resume, copied to the build as-is
public/og-image.png         1200×630 link-preview image
yeti-desk-standalone.html   standalone version of the desk yeti scene
```

## Common edits

- **Resume:** replace `public/resume.pdf`. It downloads as `Spandan_Dhru_Resume.pdf` (set by the `download` attribute on the Download Resume link).
- **Skills and project tags:** edit the `<ul class="skills">` lists. Each item is an icon from `icons/` plus a label.
- **3D models:** each scene is created with `makeStage(element, options)` in the script. Useful options:
  - `spin`: auto-rotation speed in radians per frame (the desk yeti uses `0.002`, the project models `0.003`)
  - `cam` / `look`: camera position and the point it aims at
  - `tilt`, `zoom`, `zoomLook`: vertical drag and scroll/pinch zoom (only enabled on the desk yeti)
- **Theme colors:** CSS variables at the top of the `<style>` block, `:root` for dark and `:root.light` for light.

## Credits

- Design inspired by [Takuya Matsuyama](https://www.craftz.dog/)'s site, craftz.dog.
- Tech logos from [Devicon](https://devicon.dev/) (MIT) and [Simple Icons](https://simpleicons.org/) (CC0). The logos are trademarks of their respective owners.
- Fonts: [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans), [IBM Plex Sans and IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Sans), via Google Fonts.
