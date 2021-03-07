let a="hello";
function libfn(){
    console.log("i am inside libfn");
}
function libfn2(){
    console.log("i am inside libfn2");
}
module.exports={
    varname:a,
    fn:libfn
}
