function sum11(num) {
    if (num[0]>num[1]*2){
        return num[0]-num[1]*2
    }else{
        return num[1]*2-num[0]
    }
}
console.log(sum11([10,3]));