let p=function(result){
    return new Promise((res,rej)=>{
        res(result)
    })
}

p(1).then((res)=>{console.log(res)})
.then(()=>{console.log(2)})
.then(()=>{console.log(3)})
