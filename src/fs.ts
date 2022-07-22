let fs=require("fs");
let path1=require("path");

// Creating Folder
 fs.mkdir(path1.join(__dirname,"/shiva",'hello.txt'),'hello world',() =>{
    // if(error) throw error;
    console.log("Folder Created ........");

 })

// Create and Write File
fs.writeFile(path1.join(__dirname,"/shiva","hello.txt"),
"Hello World",
()=>{
    try{
        console.log("We have write");
    }
    catch(error){
        console.error(error);
    }
})
fs.writeFile(path1.join(__dirname,"/shiva","index.html"),"<p>Hello World</p>",
()=>
{
 try{
    console.log("Html file created");
    //Append file
    fs.appendFile(path1.join(__dirname,"/shiva","asdh.tml"),"<h1>Hello</h1>",
    ()=>{
        try{
            console.log("Created");
        }
        catch(error){
            console.error(error);
        }
    })
 }
 catch(error){
    console.error(error);
 }
})

//Read File
fs.readFile(path1.join(__dirname,"/shiva","hello.txt"),"utf8",(data:any)=>{
    try{
     console.log(data);
    }
    catch(error){
        console.error(error);
    }
})
//Rename file
fs.rename(path1.join(__dirname,"/shiva","hello.txt"),path1.join(__dirname,"/shiva","heeloWorld.txt"),()=>{
    try{
        console.log("Renamed Successfully!");
    }
    catch(error){
        console.error(error);
    }
})
