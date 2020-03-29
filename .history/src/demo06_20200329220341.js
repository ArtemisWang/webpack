let arr=[1,2,3,4]
console.log(arr)
arr.forEach(item=>{
    item=item*2
})
console.log(arr)
arr=arr.map(item=>{
    item=item*2
    return item
})
console.log(arr,isNaN(NaN))