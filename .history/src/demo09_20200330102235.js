// Map中使用symbol作为key值是否唯一？未登记的情况下也是唯一的。

let k1=Symbol('kk')
let k2=Symbol('kk')
let hash=new Map([[k1,{a:1}]])
hash.set(k2,{a:2})
hash.set('kk',{a:3})
console.log(hash)
for(let [k,v] in hash){
    console.log([k,v])
}