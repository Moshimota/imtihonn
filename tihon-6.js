function sum6(n,b) {
    if (n<b) {
        return "<"
    }else if (n>b){
        return ">" 
    }else{
        return "="
    }
}
console.log(sum6([2],[2]));