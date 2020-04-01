let p=function(result){
    return new Promise((res,rej)=>{
        res(result)
    })
}

p(1).then((res)=>{console.log(res)})
.then(()=>{
    setTimeout(()=>console.log(2),1000)
})
.then(()=>{
    setTimeout(()=>console.log(3),1000)
})
