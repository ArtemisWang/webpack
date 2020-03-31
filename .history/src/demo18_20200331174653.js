function logMethod(id) {
    console.log('evaluated logMethod'+id);
    return (target, name, desctiptor) => console.log('excuted         logMethod '+id);
}

class Example {
    @logMethod(1)
    @logMthod(2)
    sum(a, b){
        return a + b;
    }
}

// evaluated logMethod 1
// evaluated logMethod 2
// excuted logMethod 2
// excuted logMethod 1