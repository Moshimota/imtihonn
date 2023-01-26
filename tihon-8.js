function sum8(n,k) {
    if(n.length==0){
        return k[0]
    }if(k.length==0){
        return n[0]
    }else{
    return (n[0]+","+k[0])
    }
}
console.log(sum8([],[23]));