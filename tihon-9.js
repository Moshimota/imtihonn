function sum9(num) {
    if (num[num.length -1]==6){
        return true
    }else if (num[0]==6){
        return true
    }else{
        return false
    }
}
console.log(sum9([4,7,6]));