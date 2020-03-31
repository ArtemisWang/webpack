// 拦截对私有属性的读取

let target={}
let handler={
    set:function(target,key,value){
        target[key]=value
    },
    get:function(target,key){
        if((/^_.+$/).test(key)){
            throw {
                name:'keyTypeError',
                message:`attempt to get private key ${key} `
            }
        }else{
            return target[key]
        }
    }
}

let proxy=new Proxy(target,handler)
proxy.name='yating'
proxy._name='yt'
console.log(proxy._name)