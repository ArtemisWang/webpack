class Example{
    static sum(a, b) {
        console.log(a+b);
    }
}
console.log(Example.sum(1, 2)); // 3


let exam=new Example()
// console.log(exam.sum(1, 2))
// 这里会报错TypeError，因为sum是Example类的私有方法