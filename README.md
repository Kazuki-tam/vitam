# VITAM

VITAM is a starter template with Vite for front-end projects. This template focuses on building a static website and suits small to medium projects like a landing page and a corporate website.

## Status

<!-- [![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/vitam)](https://github.com/Kazuki-tam/vitam/releases/latest) -->
<!-- [![Issues](https://img.shields.io/github/issues/Kazuki-tam/vitam)](https://github.com/Kazuki-tam/vitam/issues) -->

![Maintenance](https://img.shields.io/maintenance/yes/2021)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/vitam)

## Features

- Fast HMR with [Vite](https://vitejs.dev/)
- Breaking HTML smaller files with [Handlebars](https://handlebarsjs.com/)
- PWA support
- Quick local server starts
- Compressing image assets
- Out of the box useful JavaScript libraries
- Based on [Enduring CSS](https://ecss.benfrain.com/) that is one of the most useful CSS architecture
- Lint TypeScript and Svelte with [ESLint](https://eslint.org/)
- HTML Validation with [HTML-validate](https://html-validate.org/)
- Transforming styles with [PostCSS](https://postcss.org/)

## Libraries

- Slider: [Swiper](https://swiperjs.com/)
- Modal: [Micromodal.js](https://micromodal.vercel.app/)
- Smooth Scroll: [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)

## How to Use

Clone this repository and install dependencies

```
yarn install
```

## Available Commands

Start your project in development mode

```
yarn start
```

Build your project for production

```
yarn build
```

Locally preview production build

```
yarn serve
```

Lint your TypeScript files

```
yarn lint
```

Fix your TypeScript files

```
yarn lint:fix
```

## Requirements

- [Node v16+ (16.13.0)](https://nodejs.org/en/)

## Main Dependencies

- [Yarn](https://yarnpkg.com/)
- [ESLint](https://eslint.org/)
- [Vite](https://vitejs.dev/)
- [Handlebars](https://handlebarsjs.com/)
- [HTML-validate](https://html-validate.org/)
- [Sass](https://sass-lang.com/)

## CSS Architecture

This starter template gives you [Enduring CSS](https://ecss.benfrain.com/) standardly, but it's not necessary architecture in all projects.
I recommend you introduce the best architecture in each project.

[CSS Architecture](https://philipwalton.com/articles/css-architecture/)

### What's Enduring CSS?

Enduring CSS is an architecture to write style sheets for large-scale, rapidly changing, long-lived web projects.
You can get these bellow benefits from Enduring CSS.

- Isolated, self-quarantining styles
- Scale to any size
- Avoiding abstraction and specificity
- One key selector to rule them all
- Handling state

### How to write Enduring CSS selectors

Here is the example selector.

```
.namespace-Component_ChildNode
```

## Recommended IDE

- [Visual Studio Code](https://code.visualstudio.com/)

## Notes

This starter template doesn't support Internet Explorer.

## License

MIT
