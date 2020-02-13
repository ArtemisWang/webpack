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

// const img1 = document.getElementById('img1')
// img1.onload=function(){
//     console.log('img loaded')
// }

// window.addEventListener('load', function(){
//     console.log('window loaded')
// }) 

// document.addEventListener('DOMContentLoaded', function(){
//     console.log('dom content loaded')
// })

const input1=document.getElementById('input1')
let timer=null
input1.addEventListener('keyup',function(){
    if(timer){
        clearTimeout(timer)
    }
    timer=setTimeout(()=>{
        // 模拟触发change事件
        console.log(input1.value)
        // 清空定时器
        timer=null
    }, 500)
    
})

// 防抖函数
function debounce(fn, delay=500){
    // timer是在闭包中的,数据被隐藏了
    let timer=null
    
    return function(){
        if(timer){
            clearTimeout(timer)
        }
    }
}