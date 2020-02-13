import {name, fn, obj} from './b'
fn()
console.log(name)
console.log(obj)
console.log('this is index.js')
const sum=(a,b)=>{
    return a+b
}

console.log(sum(10,20))

import obj1 from './c'
console.log(obj1)
console.log(100)