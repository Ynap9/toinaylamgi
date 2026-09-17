# Tối Nay Làm Gì 🌙

[Tiếng Việt](README.md) · **English**

**Source code: [github.com/Ynap9/toinaylamgi](https://github.com/Ynap9/toinaylamgi)**

Can't decide what to do tonight? Open a case, spin for a plan, and add a little surprise to your evening: read comics, play games, play chess, go to a cafe, watch a movie, code or visit your hometown.

The app runs entirely on your computer, with no login or backend required. Enable or disable built-in choices, add your own, and save everything in your browser.

## Features

- CS-style case opening with sounds, rarity tiers and reveal animation.
- 16 built-in choices, each with a photo and a playful Vietnamese couplet.
- Toggle built-in choices and add up to 50 custom ones.
- Vietnamese and English interface.

## Run locally

You need **Node.js 22.12+** and the **pnpm** version specified in [package.json](package.json).

```sh
git clone https://github.com/Ynap9/toinaylamgi.git
cd toinaylamgi
pnpm install --frozen-lockfile
pnpm start
```

Open [127.0.0.1:5173](http://127.0.0.1:5173). No `.env` file or external service setup is needed. If the port is busy, run `pnpm start --port 5188`.

Development commands:

```sh
pnpm test       # Run checks
pnpm build      # Create a build
pnpm preview    # Preview at http://127.0.0.1:4173
```

The servers bind to `127.0.0.1` only. Once dependencies are installed, the app loads its assets locally; external links open only when you click them.

## Adding built-in choices

The list lives in [src/lib/todos.ts](src/lib/todos.ts). Each entry has `name`, `sub`, `rarity` (0–4), `image` and `quip`. Put the matching image at `public/todo-<image>.webp` and add the English name in [src/lib/i18n.ts](src/lib/i18n.ts). Remember to credit the image source in [ATTRIBUTION.md](ATTRIBUTION.md).

## Your data

Choice lists, language, sound and spin counts are saved automatically in cookies in your current browser. Clearing cookies resets this data; it does not sync across devices. The displayed spin count belongs to this browser only.

If cookies are blocked or the list is too large, the app will let you know it could not save.

## Contributing

Everyone is welcome to [report bugs, suggest ideas](https://github.com/truanayangi-com/truanayangi/issues/new), or fork the repo and [submit a PR to `main`](https://github.com/truanayangi-com/truanayangi/compare). Use Vietnamese or English, and feel free to open a draft PR for discussion. No approved issue or organization membership is required.

Describe your change and how you checked it. For code changes, run tests and a build when possible. Keep secrets out of the repo and credit the sources you use.

## Credits

This project builds on [Trưa Nay Ăn Gì](https://github.com/truanayangi-com/truanayangi) by nagisanzenin and the community, preserving its Git history. Photos from Unsplash, sounds from SourceSounds. See [author and asset attribution](ATTRIBUTION.md).
