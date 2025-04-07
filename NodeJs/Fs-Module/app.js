const fs = require("fs");


//klasör okuma
// const files = fs.readdir('./', function(error, data){

//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });

//dosya okuma

// const data = fs.readFile('deneme.txt', 'utf8', function(error, data){

//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// }) 

//yeni bir dosya oluşturma
// fs.writeFile("dnm.txt", "hello ı am nur", function (error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("dosya oluşturuldu");
//     }
//   })

//dosya silme
// fs.unlink("dnm.txt", function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("dosya silindi");
//     }
//   })

//dosyaya yeni isim ekleme
fs.rename("deneme.txt", "fenerbahce.txt", function(error){
    if(error){
        console.log(error);
    }else{
        console.log("dosya ismi değiştirildi")
    }
})