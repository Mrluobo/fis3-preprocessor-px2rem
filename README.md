a fis3 plugin for px2rem

# [fis3](https://github.com/fex-team/fis3)-preprocessor-px2rem [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
 
 This is a FIS3 plugin for [px2rem](https://github.com/songsiqi/px2rem).
 
## Installation
 
 Run `npm install fis3-preprocessor-px2rem`
 
## Usage
 
 ```js
fis.match('test.css', {
    preprocessor: fis.plugin('px2rem',{
            designWidth: 640
    })
})
 ```
 
## setting
 
 
 ```js
 {
    designWidth: 640 // designWidth , 640 defult
 }
 ```
 

## Example

### Pre processing:

One raw stylesheet: `test.css`

```
.selector {
    width: 150px;
    height: 64px; /*px*/
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
}
```

### After processing:

Rem version: `test.debug.css`

```
.selector {
    width: 2rem;
    border: 1px solid #ddd;
}
[data-dpr="1"] .selector {
    height: 32px;
    font-size: 14px;
}
[data-dpr="2"] .selector {
    height: 64px;
    font-size: 28px;
}
[data-dpr="3"] .selector {
    height: 96px;
    font-size: 42px;
}
```

 
# License
 MIT © 2015 mrluobo (602003869@qq.com)
 
 [npm-image]: https://badge.fury.io/js/fis3-preprocessor-px2rem.svg
 [npm-url]: https://www.npmjs.com/package/fis3-preprocessor-px2rem
 [daviddm-image]: https://david-dm.org/Mrluobo/fis3-preprocessor-px2rem.svg?theme=shields.io
 [daviddm-url]: https://david-dm.org/Mrluobo/fis3-preprocessor-px2rem
