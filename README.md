# Naimi Nafis - Portfolio

[naiminafis.github.io/portfolio](https://naiminafis.github.io/portfolio/)

![Portfolio screenshot](public/og.png)

Static site built with [Astro](https://astro.build) and TypeScript, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # type check + build to dist/
```

- Projects live in `src/data/projects.ts`.
- Card screenshots: drop `src/assets/projects/<slug>.png` (or `.jpg`/`.webp`). Cards without one show a coloured name tile.
- Resume: replace `public/resume.pdf`.

## Contact

- GitHub: [@NaimiNafis](https://github.com/NaimiNafis)
- LinkedIn: [Naimi Nafis](https://www.linkedin.com/in/naimi-nafis-83845a274/)
- Email: naiminafis@gmail.com
