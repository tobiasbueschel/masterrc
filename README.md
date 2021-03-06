<h1 align="center">masterrc
  <br>
  <a href="https://github.com/tobiasbueschel/awesome-pokemon/pulls"><img alt="Pull Requests Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
  <a href="http://npm.im/masterrc"><img alt="NPM Version Shield" src="https://img.shields.io/npm/v/masterrc.svg?style=flat-square"></a>
  <a href="http://npm-stat.com/charts.html?package=masterrc"><img alt="NPM Download Shield" src="https://img.shields.io/npm/dm/masterrc.svg?style=flat-square"></a>
  <a href="http://opensource.org/licenses/MIT"><img alt="MIT License Shield" src="https://img.shields.io/npm/l/masterrc.svg?style=flat-square)"></a>
</h1>

![masterrc gif](https://media.giphy.com/media/3o6Zt4h6LP9c39qIXC/giphy.gif)

> An rc file for rc files

Does your project contain too many _unnecessary_ .dotfiles that clutter up your repository? Masterrc removes this clutter by creating a `.masterrc` file that automatically builds all of them for you.

### Before `masterrc`
![.dotfile hell](http://i.imgur.com/NwwFRMo.png)

### After `masterrc`
![.masterrc saves the day](http://i.imgur.com/mYyz6Re.png)

## Usage
(1) Download masterrc from npm and make the command line tool available globally.
```bash
$ npm install -g masterrc
```
_[alternatively you could install `masterrc` as a dev dependency and configure it to run with your npm / gulp / grunt build script]_

(2) Create a `.masterrc` file in your repository using the following format:

![usage instructions](http://i.imgur.com/oIWI8TX.png)

(3) Generate your .dotfiles

```bash
$ masterrc
```

## License
[MIT](https://opensource.org/licenses/MIT) © [Luke Jackson](https://github.com/lukejacksonn) & [Tobias Büschel](https://github.com/tobiasbueschel)
