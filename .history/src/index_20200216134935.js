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

// const input1=document.getElementById('input1')
// let timer=null
// input1.addEventListener('keyup',function(){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer=setTimeout(()=>{
//         // 模拟触发change事件
//         console.log(input1.value)
//         // 清空定时器
//         timer=null
//     }, 500)
    
// })

// 防抖函数
// function debounce(fn, delay=500){
//     // timer是在闭包中的,数据被隐藏了
//     let timer=null
    
//     return function(){
//         if(timer){
//             clearTimeout(timer)
//         }
//         timer=setTimeout(()=>{
//             fn.apply(this,arguments)
//             timer=null
//         }, delay)
//     }
// }

// input1.addEventListener('keyup', debounce(()=>{
//     console.log(input1.value)
// }), 500)

// const div1=document.getElementById('div1')
// let timer=null
// div1.addEventListener('drag', function(e){
//     if(timer){
//         return 
//     }
//     timer=setTimeout(()=>{
//         console.log(e.offsetX, e.offsetY)
//         timer=null
//     },100)
    
// })

// 节流

// function throttle(fn, delay=100){
//     let timer = null
//     return function(){
//         if(timer){
//             return 
//         }
//         timer=setTimeout(()=>{
//             fn.apply(this,arguments) //主要用于传递arguments参数
//             timer=null
//         },delay)
//     }
// }
// const div1=document.getElementById('div1')
// div1.addEventListener('drag', throttle((e)=>{console.log(e.offsetX,e.offsetY)}, 500))

// console.log((123).toString())

// function isObject(obj){
//     return typeof obj==='object' && obj!==null
// }

// function isEqual(obj1, obj2){
//     // 1. 判断是否都是引用类型，不是的话直接返回三等
//     if(!isObject(obj1)||!isObject(obj2)){
//         return obj1===obj2
//     }
//     // 2. 直接判断两个是否直等，true的话返回
//     if(obj1===obj2){
//         return true
//     }
//     // 3. 比较两个对象的keys长度是否一样，不同则返回false
//     if(Object.keys(obj1).length!==Object.keys(obj2).length){
//         return false
//     }
//     // 4. 对obj中的每个key对应的值递归，有为false的情况直接返回false
//     for(let key in obj1){
//         const res= isEqual(obj1[key],obj2[key])
//         if(!res){
//             return false
//         }
//     }
//     // 上面的递归结果都是true，则返回true
//     return true
// }

// const obj1={
//     a:100,
//     b:{
//         x:100,
//         y:200
//     }
// }
// const obj2={
//     a:100,
//     c:{
//         x:100,
//         y:300
//     }
// }
// console.log(isEqual(obj1,obj2))
// console.log(obj2['b'])

// 数组的纯函数
// const arr=[10,20,30,40]
// const arr1=arr.concat([50,60,70])
// const arr2=arr.map(num=>num*10)
// const arr3=arr.filter(num=>num<30)
// const arr4=arr.slice(1)// 截取数组，深拷贝
// arr.splice(1, 1)
// console.log(arr, arr1, arr2, arr3, arr4)

// 非纯函数
// push pop shift unshift
// forEach
// some every
// reduce

// let arr=[1,2,3,4]
// arr.reduce((p,n)=>{n=10+p; return n})
// console.log(arr)

// const obj1={
//     a:10,
//     b:20,
//     sum(){
//         return this.a+this.body
//     }
// }

// const obj2= new Object({
//     a:10,
//     b:20,
//     sum(){
//         return this.a+this.body
//     }
// })

// const obj2= new Object(obj1)

// console.log(obj1, obj2)

// let i
// for(i=1;i<=3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

// // 邮政编码，6个数字
// let reg=/\d{6}/
// // 小写英文字母
// reg=/^[a-z]+$/
// // 英文字母
// reg=/^[a-zA-Z]+$/
// // 日期格式 1999-1-22
// reg=/^\d{4}-\d{1,2}-\d{1,2}$/
// // 用户名 6-18位
// reg=/^[a-zA-Z]\w{5,17}$/
// // 简单的IP地址匹配
// reg=/\d+\.\d+\.\d+\.\d+/

// function max(){
//     console.log(arguments)
//     // console.log(arguments.slice())
// }

// max(10,20,30,40)

function ma(name){
    let str='?a=10&b=20&c=30'
    str=str.slice(1)
    const reg1=new RegExp(`^(.*)${name}=`,'g')
    const reg2=new RegExp('&.*','i')
    console.log(str.replace(reg1,'').replace(reg2,''))
}
ma('c')
