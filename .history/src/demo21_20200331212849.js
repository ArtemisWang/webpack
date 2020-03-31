function callChoice(x,y){
    if(x===1||y===1) return 1
    let dp=Array(x).fill(0).map(()=>(Array(y).fill(1)))
    let i=x-2,j=1
    for(j;j<=y-1;j++){
        while(i>=0){
            dp[i][j]=dp[i][j-1]+dp[i+1][j]
            i--
        }
        i=x-2
    }
    return dp[0][y-1]
}

console.log(callChoice(2,2))