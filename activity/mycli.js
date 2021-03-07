let helpfileobj=require("./command/help")
let viewfileobj=require("./command/view")
let organizefileobj=require("./command/organize")
let input=process.argv.slice(2);
let cmd=input[0];
switch(cmd){
    case "view":
        viewfileobj.viewFun(input[1],input[2]);
        //console.log("view command implemented");
        break;
    case "organize":
        organizefileobj.organizefun();
        //console.log("view command implemented");
        break;
    case "help":
        helpfileobj.helperfun();
        break;
    default:
        console.log("wrong commands:(type help to see the commands")
}