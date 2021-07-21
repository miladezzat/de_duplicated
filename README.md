# De Duplicated [![npm version](https://badge.fury.io/js/de_duplicated.svg)](https://badge.fury.io/js/de_duplicated) [![GitHub forks](https://img.shields.io/github/forks/miladezzat/DE_DUPLICATE)](https://github.com/miladezzat/DE_DUPLICATE/network) [![GitHub issues](https://img.shields.io/github/issues/miladezzat/DE_DUPLICATE)](https://github.com/miladezzat/DE_DUPLICATE/issues) [![GitHub stars](https://img.shields.io/github/stars/miladezzat/DE_DUPLICATE)](https://github.com/miladezzat/DE_DUPLICATE/stargazers) [![Build Status](https://travis-ci.org/miladezzat/DE_DUPLICATE.svg?branch=master)](https://travis-ci.org/miladezzat/DE_DUPLICATE)

This is package  for deleting the duplicated elements in array, there are contain two methods, first method called simpleArray, this method de_duplicated the simple elements just numbers or strings or both, and second method is complexArray the de_duplicated object elements in array  

## Getting Started

download the package in your project and require it, and use it

### Prerequisites

you should have node.js in your local machine


### Installing

open terminal and go to your project directory and write
``` bash
    npm install de_duplicated

    // or

    yarn add de_duplicated
```

### How To Use it
After install package

1. Examples for simple array:
```js
//example 1
import DeDuplicated from 'de_duplicated';
// OR
const DeDuplicated = require('../de_duplicate/build').default;

let simpleArray = [2, 5, 8, 2, 2, 8, 5, 2, 3];

let uniqueSimpleArray = DeDuplicated.simpleArray(simpleArray);

console.log(uniqueSimpleArray);
//result
    //[ 2, 5, 8, 3 ]
```


```js
//example 2

import DeDuplicated from 'de_duplicated';
// OR
const DeDuplicated = require('../de_duplicate/build').default;

let simpleArray = ['john', 'milad', 'Milad', 'john', 'John'];

let uniqueSimpleArray = DeDuplicated.simpleArray(simpleArray);

console.log(uniqueSimpleArray);
// result
    //[ 'john', 'milad' ]

   // Note that: The simpleArray method case insensitive for string 
```
```js
 //example 3
import DeDuplicated from 'de_duplicated';
// OR
const DeDuplicated = require('../de_duplicate/build').default;

let simpleArray = [1, 2, 1, 2, 5, 8, 8, 5, 'john', 'milad', 'Milad', 'john', 'John'];

let uniqueSimpleArray = DeDuplicated.simpleArray(simpleArray);

console.log(uniqueSimpleArray);
//result
    //[ 1, 2, 5, 8, 'john', 'milad' ]

    //Note That: The simpleArray method case insensitive for string 
```
2. Examples for complex array
```js
    //example 1
import DeDuplicated from 'de_duplicated';
// OR
const DeDuplicated = require('../de_duplicate/build').default;

let complexArray = [
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 3, name: "Milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
]

let uniqueComplexArray = DeDuplicated.complexArray(complexArray, 'id');

console.log(uniqueComplexArray);
// result
   /* [
        { id: 1, name: 'Milad', age: 24 },
        { id: 2, name: 'Milad', age: 24 },
        { id: 3, name: 'Milad', age: 24 }
    ]*/
```
```js
    //example 2
import DeDuplicated from 'de_duplicated';
// OR
const DeDuplicated = require('../de_duplicate/build').default;

let complexArray = [
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "John", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 3, name: "John", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
]

let uniqueComplexArray = DeDuplicated.complexArray(complexArray, 'name');

console.log(uniqueComplexArray);
//result
    //[ { id: 1, name: 'Milad', age: 24 }, { id: 2, name: 'John', age: 24 } ]
```
```js
    //example 3
import DeDuplicated from 'de_duplicated';
// OR
const DeDuplicated = require('../de_duplicate/build').default;

let complexArray = [
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 3, name: "milad", age: 24 },
    { id: 1, name: "Milad", age: 24 },
    { id: 2, name: "Milad", age: 24 },
]

let uniqueComplexArray = DeDuplicated.complexArray(complexArray, 'name');

console.log(uniqueComplexArray);
//result
    /*[
    { id: 1, name: 'Milad', age: 24 },
    { id: 2, name: 'milad', age: 24 }
    ]*/

    //Note that : The complexArray method case sensitive for string 
```
## Authors

* **Milad E. Fahmy** - *Initial work* - [Milad E. Fahmy](https://github.com/miladezzat/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/miladezzat/de_duplicated/tree/development/LICENSE.md) file for details

