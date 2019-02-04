# webpack

> simple webpack configuration for building web pages

You could use it as a base to build your own web app.

## Features

- Webpack 4.x
- ES6+ syntax support with babel 7.x
- Support [HMR](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code

## Usage

1. Check if your Node.js version is >= 6.
2. Clone the repo

```bash
$ git clone https://github.com/Quernest/webpack.git <yourAppName>
$ cd <yourAppName>
```

3. Delete the old `.git` history and initialize new history.

```bash
$ rm -rf .git
$ git init
```

4. install the dependencies

```bash
$ yarn install
```

5. launch the app

```bash
$ yarn start
```

Now you should see a new browser window/tab opening and a title in http://localhost:3000.

Last, You need update `package.json` and modify fields like `name`, `version`, `description`, `keywords`, `author`, `license` and so on to fit your project.

From there, you start to develop your own code in the `src` directory. When you finish coding, use `yarn run build` to build the static files.

## Author

- [github/Quernest](https://github.com/Quernest)

## License

MIT
