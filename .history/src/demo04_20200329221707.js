let hash=new Map()
hash.set('key1',{a:{b:1}})
hash.set('key2','value2')
hash.set('key3','value3')
console.log(hash,hash.size)

let hash2=new Map(hash)
hash.set('key1',{a:{b:3}})
console.log(hash,hash2)