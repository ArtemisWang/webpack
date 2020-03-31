function callLastMonthDay(str){
    let y=str.slice(0,4)
    let m=str.slice(4,6)
    let d=str.slice(6,8)
    let resD="31"
    let short=["02","04","06","09","11"]
    if(short.includes(m)){
        resD="30"
        if(m==="02"){
            y=parseInt(y,10)
            resD=(y%400===0||(y%4===0&&y%100!==0))?"29":"28"
        }
    }
    return y+m+resD
}

console.log(callLastMonthDay('20190901'))