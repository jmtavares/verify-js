# VerifyJS
A tool to verify the validity of your data using Promises.

[![Build Status](https://travis-ci.org/yconoclast/verifyjs.svg)](https://travis-ci.org/yconoclast/verifyjs)
[![Dependency Status](https://david-dm.org/yconoclast/verifyjs.svg)](https://david-dm.org/yconoclast/verifjs)
[![devDependency Status](https://david-dm.org/yconoclast/verifyjs/dev-status.svg)](https://david-dm.org/yconoclast/erifyjs#info=devDependencies)

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
Object.isObject(obj)
Object.isNotObject(obj)
Object.isDefined(obj)
Object.isNotDefined(obj)
Object.isNull(obj)
Object.isNotNull(obj)
Object.isUndefined(obj)
Object.isNotUndefined(obj)
```

## Contributing

If you'd like to contribute a change to VerifyJS, modify the files in `src/` and `test/`

``` sh
$ npm install
$ grunt test
```

Please do not check-in the built files `verify.js` and `verify.min.js` in pull requests.

## License
Licensed as MIT. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
