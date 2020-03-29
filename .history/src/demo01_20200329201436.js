const sy=Symbol("sy")
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);
 
for (let i in syObject) {
  console.log(i);
}    // 无输出
 
Object.keys(syObject);                     // []
Object.getOwnPropertySymbols(syObject);    // [Symbol(key1)]
Reflect.ownKeys(syObject);                 // [Symbol(key1)]