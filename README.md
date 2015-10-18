# VerifyJS
Verify all kind of data using Promises (Object, Array, String, Number, Boolean, Function).

[![Build Status](https://travis-ci.org/yconoclast/verifyjs.svg)](https://travis-ci.org/yconoclast/verifyjs)
[![npm version](https://badge.fury.io/js/verify-js.svg)](https://badge.fury.io/js/verify-js)
[![Dependency Status](https://david-dm.org/yconoclast/verify-js.svg)](https://david-dm.org/yconoclast/verifjs)
[![devDependency Status](https://david-dm.org/yconoclast/verify-js/dev-status.svg)](https://david-dm.org/yconoclast/verify-js#info=devDependencies)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## Install

``` js
npm install verify-js --save

```

Include the minified version (verify.min.js) in your page.

## How to use
#### One input
``` js
Object.isDefined(input).then(
    function () {
        // Valid Data
    },
    function () {
        // Invalid Data
    }
);
```

#### Multiple inputs
``` js
Promise.all([
    Object.isDefined(input1),
    Object.isDefined(input2)
]).then(
    function () {      
        // Valid Data
    },
    function () {
        // Invalid Data
    }
);
```
## Methods
### Object

``` js
Object.isObject(input)
Object.isNotObject(input)
Object.isDefined(input)
Object.isNotDefined(input)
Object.isNull(input)
Object.isNotNull(input)
Object.isUndefined(input)
Object.isNotUndefined(input)
Object.isInstanceOf(input, instance)
Object.isNotInstanceOf(input, instance)
Object.hasOwnProperties(input)
```

### Array

``` js
Array.isEmpty(input)
Array.isNotEmpty(input)
Array.hasXElements(input, length)
```

### String

``` js
String.isString(input)
String.isNotString(input)
```

### Number

``` js
Number.isNumber(input)
Number.isNotNumber(input)
```

### Boolean

``` js
Boolean.isBoolean(input)
Boolean.isNotBoolean(input)
```

### Function

``` js
Function.isFunction(input)
Function.isNotFunction(input)
```
## Dependencies

It uses [promise-polyfill](https://github.com/taylorhakes/promise-polyfill) to apply a fallback when native **Promises** aren't available.

> Lightweight promise polyfill for the browser and node. A+ Compliant. It is a perfect polyfill IE, Firefox or any other browser that does not support native promises.
This implementation is based on [then/promise](https://github.com/then/promise). It has been changed to use the prototype for performance and memory reasons.
For API information about Promises, please check out this article [HTML5Rocks article](http://www.html5rocks.com/en/tutorials/es6/promises/).

 
## Contributing

If you'd like to contribute a change to VerifyJS, modify the files in `src/` and `test/`

``` sh
$ npm install
$ grunt test
```

Please do not check-in the built files `verify.js` and `verify.min.js` in pull requests.

## License
Licensed as MIT. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
