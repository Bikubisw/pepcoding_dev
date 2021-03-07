let fs=require("fs");
function view(dirpath,mode){
    if(mode=="tree"){
        viewtree(dirpath,"");
        //console.log("tree is working");
    }else if(mode=='flat'){
        viewflat(dirpath);
       // console.log("flat is working");

    }else {
        console.log("wrong mode");

    }

}
function isFileorNot(dirpath){
    return fs.lstatSync(dirpath).isFile();

}
function getcontent(dirpath){
    return fs.readdirSync(dirpath);
}
function viewflat(dirpath){
    let isfile=isFileorNot(dirpath);
    if(isfile){
        console.log(dirpath+'*');

    }else{
        console.log(dirpath);
        let content=getcontent(dirpath);
        //console.log(content);
        for(let i=0;i<content.length;i++){
            let childpath=dirpath+"/"+content[i];
            viewflat(childpath);
        }
    }

}
function viewtree(dirpath,indent){
    let isfile=isFileorNot(dirpath);
    if(isfile){
        let starr=dirpath.split("//");
        let toprint=starr.pop();
        console.log(indent,toprint+'*');

    }else{
        let starr=dirpath.split("//");
        let toprint=starr.pop();
        console.log(indent,toprint);
        let content=getcontent(dirpath);
        //console.log(content);
        for(let i=0;i<content.length;i++){
            let childpath=dirpath+"//"+content[i];
            viewtree(childpath,indent+"\t");
        }
    }
}
module.exports={
    viewFun:view
}