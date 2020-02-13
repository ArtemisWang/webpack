// import {name, fn, obj} from './b'
// fn()
// console.log(name)
// console.log(obj)
// console.log('this is index.js')
// const sum=(a,b)=>{
//     return a+b
// }

// console.log(sum(10,20))

// import obj1 from './c'
// console.log(obj1)
// console.log(100)

const img1 = document.getElementById('img1')
img1.onload=function(){
    console.log('img loaded')
}

window.addEventListener('load', function(){
    console.log('window loaded')
}) 

document.addEventListener('DOMContentLoaded', function(){
    console.log('dom content loaded')
})