
   const https = require("https");
   const fs = require("fs");
   
   function download(){
      const url = "https://gist.githubusercontent.com/Ishan678-code/9c8f523b44a18b29534648b8be5979d4/raw/662bb2f9f5dd6afa35466f9393b1208a3a39bee9/data.json";
   
   https.get(url, (res) => {
      const path = "downloaded-file.json";
      const writeStream = fs.createWriteStream(path);
   
      res.pipe(writeStream);
   
      writeStream.on("finish", () => {
         writeStream.close();
         console.log("Download Completed!");
      })
   })
   }
   module.exports={download};

 