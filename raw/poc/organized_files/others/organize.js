let fs=require("fs");
let path=require("path");
let types = { media: ["mp4", "mkv", "mp3"], 
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"], 
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
     app: ['exe', 'dmg', 'pkg', "deb"]     
}
let input=process.argv.slice(2);
let torganizepath=input[0];
let organizefilespath=path.join(torganizepath,"organized_files");
function dircreator(dirpath){
    if(fs.existsSync(dirpath)==false){
        fs.mkdirSync(dirpath);
    }
}
dircreator(organizefilespath);
for(let key in types){
    let innerpath=path.join(organizefilespath,key);
    dircreator(innerpath);
}
let otherpath=path.join(organizefilespath,"others");
dircreator(otherpath);
organizefile(torganizepath);
function getfolderName(dirpath){
    let strarr=dirpath.split(".");
    let ext=strarr.pop();
    for(let key in types){
        for(let i=0;i<types[key].length;i++){
            if(types[key][i]==ext){
                return key;
            }
        }
    }
    return "others";

}
function isFileorNot(dirpath){
    return fs.lstatSync(dirpath).isFile();

}
function getcontent(dirpath){
    return fs.readdirSync(dirpath);
}
function copytodest(dirpath,destfolderpath){
    let originNALNAME=path.basename(dirpath);
    let desfilepath=path.join(destfolderpath,originNALNAME);
    fs.copyFileSync(dirpath,desfilepath);
}
function organizefile(dirpath){
    let isfile=isFileorNot(dirpath);
    if(isfile){
        let desfoldername=getfolderName(dirpath);
        let desfolderpath=path.join(organizefilespath,desfoldername);
        copytodest(dirpath,desfolderpath);


    }else{
        let content=getcontent(dirpath);
        //console.log(content);
        for(let i=0;i<content.length;i++){
            let childpath=path.join(dirpath,content[i])
            organizefile(childpath);
            
        }
    }

}