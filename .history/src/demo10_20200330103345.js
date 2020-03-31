// 拦截对私有属性的读取

let target={}
let handler={
    set:function(target,key,value){
        target[key]=value
    },
    get:function(target,key){
        if(key.test(/^_.+$/)){
            throw new Error(`获取错误：尝试获取私有属性${key}`)
        }else{
            return target[key]
        }
    }
}

let proxy=new Proxy(target,handler)