const nums = ["zero", "one", "two"];
 
for (let num of nums) {
  console.log(num);
}
// TypedArray
const typedArray1 = new Int8Array(6);
typedArray1[0] = 10;
typedArray1[1] = 11;
 
for (let item of typedArray1) {
  console.log(item);
}