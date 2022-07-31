var outer = ()=>{
    var a=5;
    function inner(){
        console.log(a);
    }
    inner();

}
outer();