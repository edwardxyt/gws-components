# Node.js: @edwardxyt/gws-components
用于nodejs 常用工具类。
## Installation

```
npm install @edwardxyt/gws-components
```
## Usage

```
const gwsUtils = require('@edwardxyt/gws-components');
```
## Methods
##### globalLoader(pattern)
遍历目录中所有包含特定名称的文件。
###### Example:

```
const {globalLoader} = require('@edwardxyt/gws-components');

// 获取utils目录下所有.js文件，返回一个数组。
globalLoader(`${__dirname}/utils/**/*.js`).then(result => {
    console.log(result)
});
```

-------

##### getModules(dir, type)
加载目录下制定名称的模块文件。
###### Example:
```
const {getModules} = require('@edwardxyt/gws-components');

// 获取lib目录下所有.js的模块。
let myModules = getModules(path.join(__dirname, './lib'),'.js');
```

-------

##### bubbleSort(arr)
冒泡排序
###### Example:
```
const {arraySort} = require('@edwardxyt/gws-components');

// 获取lib目录下所有.js的模块。
arraySort.bubbleSort([1,2,3]).then(data => {
    log(data)
})
```