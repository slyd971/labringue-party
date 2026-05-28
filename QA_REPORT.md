# QA Report - La Bringue

Date: 2026-05-28
Environnement audite: build production Next.js local

## Verifications lancees

- `npm run build`: OK, compilation Next.js 16.2.6, TypeScript OK, 29 pages generees.
- `npm run lint`: OK, 0 erreur, 0 warning apres correctifs.
- Serveur production local: `next start -p 3002`, home, sitemap et page ville en HTTP 200.
- Responsive Chrome headless: 390x844, 768x1024, 1440x1100.
- Controle runtime responsive: 0 overflow horizontal, 1 `h1`, 0 image cassee, 0 erreur console sur les trois viewports.
- SEO runtime: title, description, robots, OG/Twitter image, canonical home, canonical ville, robots.txt et sitemap.xml verifies.
- Performance legere via Navigation Timing mobile local: DOMContentLoaded 124 ms, load 272 ms, FCP 280 ms.

## Erreurs critiques

Aucune erreur critique restante detectee.

Points critiques corriges pendant l'audit:

- Le lint etait inutilisable a cause d'une config ESLint incompatible avec la config flat Next 16.
- `package.json` annonçait Next 15 alors que le lockfile/node_modules utilisaient Next 16, ce qui rendait `npm ls` incoherent.

## Warnings

- Le dossier `public` pese environ 2.0 GB, avec de nombreuses photos de ville entre 10 MB et 37 MB. Next optimise les images servies via `next/image`, mais le depot et les builds restent lourds.
- Les images Vision restent assez lourdes: environ 1.2 MB a 2.5 MB par fichier source.
- Lighthouse n'est pas installe dans le projet; l'audit performance est donc limite aux signaux build, assets, Chrome headless et Navigation Timing local.
- Le bloc "Concours de twerk" reutilise `SHOWCASE.jpg`, car aucun visuel dedie au concours de twerk n'est present dans `public/vision`.

## Recommandations

- Compresser/exporter les photos de ville en WebP ou AVIF, avec des dimensions web ciblees, avant commit.
- Ajouter Lighthouse CI ou Playwright pour rendre les checks responsive/performance reproductibles en CI.
- Ajouter une image dediee pour `Concours de twerk` afin d'eviter la duplication visuelle avec `Showcase`.
- Envisager des `lastModified` stables dans `sitemap.ts` plutot que `new Date()` a chaque build si le site doit maximiser la proprete SEO.

## Correctifs appliques

- Remplacement des anciennes references `vision1.png` a `vision4.png` par les nouveaux visuels dans `public/vision`.
- Mise a jour du bloc Vision avec les 6 activations demandees.
- Passage des grilles Vision/activations en 3 colonnes desktop pour un rendu equilibre avec 6 cartes.
- Remplacement des `<img>` restants par `next/image` dans les sections auditees.
- Correction de `eslint.config.mjs` pour utiliser directement les exports flat de `eslint-config-next`.
- Alignement de `package.json` et `package-lock.json` sur Next 16 / eslint-config-next 16.
- Ajout de canonical SEO sur la home et les pages villes.
- Alignement des metas SEO de `+125K` vers `+130K`, coherent avec les chiffres affiches.
- Suppression des `.DS_Store` presents dans `public`.

