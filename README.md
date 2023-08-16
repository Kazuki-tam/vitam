# VITAM

VITAM is a starter template with Vite for front-end projects. This template focuses on building a static website and suits small to medium projects like a landing page and a corporate website.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/vitam)](https://github.com/Kazuki-tam/vitam/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/vitam)](https://github.com/Kazuki-tam/vitam/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/vitam)

## Features

- Fast HMR with [Vite](https://vitejs.dev/)
- PWA support
- Quick local server
- Compressing image assets
- Breaking HTML smaller files with [Handlebars](https://handlebarsjs.com/)
- Referring to [Enduring CSS](https://ecss.benfrain.com/)
- Out of the box useful JavaScript libraries
- Out of the box useful SCSS functions and Mixins
- Checking TypeScript with [ESLint](https://eslint.org/)
- HTML Validation with [HTML-validate](https://html-validate.org/)
- Transforming styles with [PostCSS](https://postcss.org/)
- Built-in test runner with [Jest](https://jestjs.io/)

## Requirements

- [Node v18 (18.13.0)](https://nodejs.org/en/)

## Main Dependencies

<!-- textlint-disable -->

- [Yarn](https://yarnpkg.com/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [HTML-vallidate](https://html-validate.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- [Handlebars](https://handlebarsjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

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

Validate HTML files

```
yarn htmlValidate
```

Lint your project files

```
yarn lint
```

Fix your project files

```
yarn lint:fix
```

Install missing TypeScript typings

```
yarn postInstall
```

Check the package's license

```
yarn checkLicense
```

Test project's code

```
yarn test
```

```
yarn test:watch
```

## HTML

You can handle bundling multiple HTML files with [vite-plugin-handlebars](https://www.npmjs.com/package/vite-plugin-handlebars).
Make sure [Handlebars Context](https://handlebarsjs.com/guide/#simple-expressions) as you need.

If you want to use multiple partial files, Add your partial files into the `_partials` folder.

`src/_partials`

You can call partial files directly by other templates like this example.

```
{{> _header }}
  <main>
    <h1>Welcome to VITAM Docs!</h1>
    <p>VITAM is a front-end template with Vite for static websites.</p>
  </main>
{{> _footer }}
```

`site.config.ts` manages the site's basic information.
You have to edit `site.config.ts` when you create a new page.

```js
const pagesData = {
  '/sample/index.html': {
    locale: siteData.locale,
    title: `Smaple Page | ${siteData.siteName}`,
    description: `This is a sample page. ${siteData.description}`,
    url: `${siteData.url}/sampple/`,
    ogpImage: siteData.ogpImage,
    ogType: 'article',
    fbAppId: siteData.fbAppId,
    fbAdmins: siteData.fbAdmins,
    twitterCard: siteData.twitterCard,
    twitterSite: siteData.twitterSite,
  },
};
```

[📖 Learn Handlebars](https://handlebarsjs.com/)

## Sass (Dart Sass)

You can manage style sheets logically with Sass. I've already defined some functions and Mixins.
Check out these files before you get started with your project.

<!-- textlint-disable -->

- `src/scss/foundation/functions/*.scss`
- `src/scss/foundation/mixins/*.scss`

<!-- textlint-enable -->

[📖 Learn Sass](https://sass-lang.com/)

## CSS Architecture

This starter template gives you CSS architecture which is [Enduring CSS](https://ecss.benfrain.com/) standardly, but it's not necessary architecture in all projects. I recommend you introduce the best architecture in each project.

[📖 Learn CSS Architecture](https://philipwalton.com/articles/css-architecture/)

### What's Enduring CSS?

Enduring CSS is an architecture to write style sheets for large-scale, rapidly changing, long-lived web projects.
You can get these benefits from Enduring CSS.

- Isolated, self-quarantining styles
- Scale to any size
- Avoiding abstraction and specificity
- One key selector to rule them all
- Handling state

[📖 Learn Enduring CSS](https://ecss.benfrain.com/)

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

Jest is built-in in this project. You can run Jest from the command line.

[📖 Learn TypeScript](https://www.typescriptlang.org/)
[📖 Learn Jest](https://jestjs.io/)

## Icons

<!-- textlint-disable -->

[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) make it easy to manage SVG icons.

<!-- textlint-enable -->

Add SVG files into the icons folder.

```
src/icons/
```

### Usage of SVG sprite

Call the icon with ID.

```html
<svg aria-hidden="true">
  <use href="#icon-file" />
</svg>
```

## PWA

[Vite Plugin PWA](https://vite-plugin-pwa.netlify.app/) supports making your website faster.
Edit `vite.config.ts` if you would like to customize settings for PWA.
You can generate icons for PWA with [Favicon Generator](https://realfavicongenerator.net/).

Note: Please replace some asset files for PWA with your project's files.

[📖 Learn PWA](https://web.dev/learn/pwa/)

## GitHub Actions

If you use GitHub in your project, you can take advantage of GitHub Actions to automate your development workflows.
Check out this file before you get started with your project.

<!-- textlint-disable -->

`.github/workflows/project-ci.yml`

<!-- textlint-enable -->


## Configurations

<!-- textlint-disable -->

- [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
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
- [jest.config.ts](https://jestjs.io/docs/configuration)

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
