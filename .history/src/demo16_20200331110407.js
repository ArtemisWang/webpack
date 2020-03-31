const arrayLink = { 0: "zero", 1: "one"}

// 报 TypeError 异常
for (let item of arrayLink) {
    console.log(item);
  }