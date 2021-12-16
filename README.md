# VITAM

VITAM is a starter template with Vite for front-end projects. This template focuses on building a static website and suits small to medium projects like a landing page and a corporate website.

## Status

Notice: This project is still in development.

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/vitam)](https://github.com/Kazuki-tam/vitam/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/vitam)](https://github.com/Kazuki-tam/vitam/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2021)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/vitam)

## Features

- Fast HMR with [Vite](https://vitejs.dev/)
- PWA support
- No virtual DOM
- Quick local server
- Compressing image assets
- Breaking HTML smaller files with [Handlebars](https://handlebarsjs.com/)
- Referring to [Enduring CSS](https://ecss.benfrain.com/)
- Out of the box useful JavaScript libraries
- Out of the box useful SCSS functions and Mixins
- Checking TypeScript and Svelte with [ESLint](https://eslint.org/)
- HTML Validation with [HTML-validate](https://html-validate.org/)
- Transforming styles with [PostCSS](https://postcss.org/)

## Requirements

- [Node v16+ (16.13.0)](https://nodejs.org/en/)

## Main Dependencies

<!-- textlint-disable -->

- [Yarn](https://yarnpkg.com/)
- [ESLint](https://eslint.org/)
- [HTML-vallidate](https://html-validate.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- [Handlebars](https://handlebarsjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Svelte](https://svelte.dev/)

<!-- textlint-enable -->

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

Format your TypeScript files

```
yarn format
```

Lint and Fix SCSS files

```
yarn stylelint
```

Install missing TypeScript typings

```
yarn postInstall
```

## PWA
[Vite Plugin PWA](https://vite-plugin-pwa.netlify.app/) supports making your website faster.  
Edit `vite.config.ts` if you would like to customize settings for PWA.  
You can generate icons for PWA with [Favicon Generator](https://realfavicongenerator.net/).

Note: Please replace some asset files for PWA with your project's files.

[Learn PWA](https://web.dev/learn/pwa/)

## Sass (Dart Sass)

You can manage style sheets logically with Sass. I've already defined some functions and Mixins.
Check out these files before you get started with your project.

<!-- textlint-disable -->

- `src/scss/foundation/functions/*.scss`
- `src/scss/foundation/mixins/*.scss`

<!-- textlint-enable -->

[Sass](https://sass-lang.com/)

## CSS Architecture

This starter template gives you CSS architecture which is [Enduring CSS](https://ecss.benfrain.com/) standardly, but it's not necessary architecture in all projects. I recommend you introduce the best architecture in each project.

[CSS Architecture](https://philipwalton.com/articles/css-architecture/)

### What's Enduring CSS?

Enduring CSS is an architecture to write style sheets for large-scale, rapidly changing, long-lived web projects.
You can get these bellow benefits from Enduring CSS.

- Isolated, self-quarantining styles
- Scale to any size
- Avoiding abstraction and specificity
- One key selector to rule them all
- Handling state

[Enduring CSS](https://ecss.benfrain.com/)

### How to write Enduring CSS selectors

Here is the example selector.

```
.namespace-Component_ChildNode
```

## TypeScript

This template supports TypeScript. It's easy to import ts files.  
You can customize TypeScript's options with `tsconfig.json` at any time.

I've already defined some utility functions.
Check out these files before you get started with your project.

<!-- textlint-disable -->

`src/ts/utils/*.ts`

<!-- textlint-enable -->

`postInstall` command will help you to install typings in this project.

[TypeScript](https://www.typescriptlang.org/)


### Svelte
You can use Svelte if you would like to build a SPA at the part of a website.

<!-- textlint-disable -->

`src/ts/svelte/*.svelte`

<!-- textlint-enable -->

[Svelte](https://svelte.dev/)

## Libraries

<!-- textlint-disable -->

- Slider: [Swiper](https://swiperjs.com/)
- Modal: [Micromodal.js](https://micromodal.vercel.app/)
- Smooth Scroll: [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)

<!-- textlint-enable -->

## Configurations

<!-- textlint-disable -->

- [.editorconfig](https://editorconfig.org/)
- [.prettierrc](https://prettier.io/docs/en/configuration.html)
- [.eslintrc.json](https://eslint.org/docs/user-guide/configuring/)
- [.htmlvalidate.json](https://html-validate.org/usage/#configuration)
- [.postcssrc.json](https://github.com/postcss/postcss-load-config)
- [.stylelintrc.json](https://stylelint.io/user-guide/configure)
- [.node-version](https://github.com/nodenv/nodenv)
- [.textlintrc](https://textlint.github.io/docs/configuring.html)
- [vite.config.ts](https://vitejs.dev/config/)
- [tsconfig.json](https://www.typescriptlang.org/tsconfig)
- [svelte.config.ts](https://kit.svelte.dev/docs)

<!-- textlint-enable -->

## Recommended IDE

- [Visual Studio Code](https://code.visualstudio.com/)

## Notes

This starter template doesn't support Internet Explorer.  
Feel free to use this template.

## Contributes

Pull requests are always welcome.

## License

MIT
