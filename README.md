# Material Design Icons - Website Components

> Note this repo is for the Material Design Icons website. If you want components for your own project look here:
>
> - [React](https://github.com/Templarian/MaterialDesign-React/)
> - [Web Component](https://github.com/Templarian/MaterialDesign-WebComponent/)

The website is made of many components...

- [mdi-database](src/mdi/database/) - Database
- [mdi-grid](src/mdi/grid/) - Icon grid
- [mdi-header](src/mdi/header/) - Header
- [mdi-icon](src/mdi/icon/) - Single icon
- [mdi-nav](src/mdi/nav/) - Site navigation
- [mdi-search](src/mdi/search/) - Global search

## Contribute to this Project

To run the application locally use the following NPM commands.

```bash
npm install
npm test
npm start
```

Open http://localhost:8080 (port could vary)

To build just the components.

```bash
npm run build
```

### Web Components

Web Components with a very basic wrapper. The only magic is...

- `@Prop() foo = 'Hello World`;
  - Calls `this.render()` on change.
- `@Part() $foo: HTMLDivElement;` = `<div part="foo"></div>`
  - `this.$part.innerText = 'Hello World!';`
- `@Local('default') foo;` Shorthand for localStorage.

Learn More: https://github.com/Templarian/Element