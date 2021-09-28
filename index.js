const userInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.think({
    text : `Hi, my name is ${userInfo.name} and I'am in the ${userInfo.campus} campus`
    }));
