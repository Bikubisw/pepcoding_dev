let fs=require("fs");
let input=process.argv.slice(2);
let path=input[0];
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
//viewflat(path);
//viewtree(path,"");