class Example {
    @logMethod(1)
    // @logMthod(2)
    sum(a, b){
        return a + b;
    }
}
function logMethod(id) {
    console.log('evaluated logMethod'+id);
    return function(target, name, desctiptor){console.log('excuted logMethod '+id)};
}

let exam=new Example()