const p1 = new Promise(function(resolve,reject){
    resolve(1);
  }).then(function(result) {
    p2(result).then(newResult => p3(newResult));
  }).then(() => p4());