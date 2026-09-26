# Spandan Dhru — Portfolio

My personal site: a single page with a voxel yeti coding at its desk, my work history, projects, skills and resume.

The page is plain HTML, CSS and JavaScript with no framework. The 3D scenes are built from boxes with [Three.js](https://threejs.org/) (r128, loaded from cdnjs), and [Vite](https://vite.dev/) is used only as a dev server and for the production build.

## Running locally

```bash
npm install
npm run dev       # http://127.0.0.1:5173 — reloads on save
```

`resume.pdf` is fetched by the download button, so the page needs to be served over HTTP. Opening `index.html` directly from disk won't work for that.

## Building

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ to check the build
```

Deploy the contents of `dist/` to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

After deploying, update the `og:image` tag in `index.html` to the full URL (`https://your-domain/og-image.png`) and add an `og:url` tag. Most link-preview crawlers ignore relative image paths.

## Project layout

```
index.html                  the whole site: markup, styles and scripts
favicon.svg                 pixel yeti, also used as the navbar logo
icons/                      skill and tech logos
public/resume.pdf           the downloadable resume, copied to the build as-is
public/og-image.png         1200×630 link-preview image
yeti-desk-standalone.html   standalone version of the desk yeti scene
```

## Common edits

- **Resume:** replace `public/resume.pdf`. It downloads as `Spandan_Dhru_Resume.pdf` (set by `RESUME_NAME` in the script).
- **Skills and project tags:** edit the `<ul class="skills">` lists. Each item is an icon from `icons/` plus a label.
- **3D models:** each scene is created with `makeStage(element, options)` in the script. Useful options:
  - `spin`: auto-rotation speed in radians per frame (the desk yeti uses `0.002`, the project models `0.003`)
  - `cam` / `look`: camera position and the point it aims at
  - `tilt`, `zoom`, `zoomLook`: vertical drag and scroll/pinch zoom (only enabled on the desk yeti)
- **Theme colors:** CSS variables at the top of the `<style>` block, `:root` for dark and `:root.light` for light.

## Credits

- Tech logos from [Devicon](https://devicon.dev/) (MIT) and [Simple Icons](https://simpleicons.org/) (CC0). The logos are trademarks of their respective owners.
- Fonts: [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans), [IBM Plex Sans and IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Sans), via Google Fonts.
