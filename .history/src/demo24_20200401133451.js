let p=function(result){
    return new Promise((res,rej)=>{
        res(result)
    })
}

p(1).then((res)=>{
    setTimeout(()=>console.log(res),2000)
})
.then(()=>{
    setTimeout(()=>console.log(2),3000)
})
.then(()=>{
    setTimeout(()=>console.log(3),4000)
})
