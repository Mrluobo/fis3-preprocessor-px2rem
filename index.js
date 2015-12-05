/**
 * @file
 * @author wangzhicheng on 15/12/2.
 */
var Px2rem = require('px2rem');
module.exports = function (content, file, settings) {
    if(!settings.designWidth){
        settings.designWidth = 640;
    }
    var px2remIns = new Px2rem({
        remUnit: settings.designWidth / 10
    });
    var newCssText = px2remIns.generateRem(content);
    return newCssText;
}