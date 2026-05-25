
let math=require('./sum')

function add(x,y){
    return x+y
}

function multi(x,y){
    return x*y
}

module.exports={
sum:add,
prod:multi
}
console.log(module);
