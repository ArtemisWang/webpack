// Map中使用symbol作为key值是否唯一？

let k1=Symbol('kk')
let k2=Symbol('kk')
let hash=new Map([[k1,{a:1}]])
hash.set(k2,{a:2})

console.log(hash)