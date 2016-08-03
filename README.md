# masterrc
[![version](https://img.shields.io/npm/v/masterrc.svg?style=flat-square)](http://npm.im/masterrc)
[![downloads](https://img.shields.io/npm/dm/masterrc.svg?style=flat-square)](http://npm-stat.com/charts.html?package=masterrc)
[![MIT License](https://img.shields.io/npm/l/masterrc.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> An rc file for rc files.

Does your project contain too many _unnecessary_ .dotfiles that clutter up your repository? Masterrc removes this clutter by creating a master rc file that automatically builds all of them for you.


## Usage
(1) Download masterrc from npm and make the command line tool available globally.
```bash
$ npm install -g masterrc && npm link
```
(2) Open your project folder and create a `.masterrc` file using the format described in the template.
```bash
$ cd yourDirectory/yourRepository
$ touch .masterrc
```
(3) Generate your .dotfiles
```bash
$ masterrc
```

## License

The MIT License (MIT)

Copyright (c) 2016 Luke Jackson & Tobias Büschel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
