const arrayLink = {length: 2, 0: "zero", 1: "one"}

// 报 TypeError 异常
for (let item of arrayLink) {
    console.log(item);
}

// 正常运行
// output:
// zero
// one
for (let item of Array.from(arrayLink)) {
    console.log(item);
}
  
