# Cumulative Moving Average [![Build Status](https://travis-ci.org/math-utils/cumulative-moving-average.png)](https://travis-ci.org/math-utils/cumulative-moving-average)

## API

```js
var cma = require('cumulative-moving-average')

var avg = cma()

avg.push(1)
console.log(avg.value) // 1
console.log(avg.length) // 1

avg.push(3)
console.log(avg.value) // 2
console.log(avg.length) // 2
```
