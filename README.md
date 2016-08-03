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

## Usage
(1) Download masterrc from npm and make the command line tool available globally.
```bash
$ npm install -g masterrc
```
(2) Open your project folder.
```bash
$ cd yourDirectory/yourRepository
```

(3) Create a `.masterrc` file using the following format:

```
​`​``​​​.eslintrc
{
  "extends": "airbnb-base"
}
​`​``

​`​``​​​​​​.dotfile-name
   // copy paste dotfile content here    
​`​``
```

(4) Generate your .dotfiles

```bash
$ masterrc
```

## License
[MIT](https://opensource.org/licenses/MIT) © [Luke Jackson](https://github.com/lukejacksonn) & [Tobias Büschel](https://github.com/tobiasbueschel)
