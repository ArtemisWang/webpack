let p=function(result){
    return new Promise((res,rej)=>{
        res(result)
    })
}

p(1).then((res)=>{
    setTimeout(()=>console.log(res),1000)
})
.then(()=>{
    setTimeout(()=>console.log(2),1000)
})
.then(()=>{
    setTimeout(()=>console.log(3),1000)
})
