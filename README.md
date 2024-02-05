# javascript-polyfills

## Installing
```bash
$ npm install javascript-polyfills 
```

## Usage

```javascript
require('javascript-polyfills') // globally available

let str = 'foobar'
str.replaceAll('bar', 'baz') // 'foobaz'

let str1 = 'aa^$^cc'
str1.replaceAll('^$^', 'bb') // 'aabbcc'

```