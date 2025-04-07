const path = require('path'); //require ile modülü kullanmaya başlıyoruz

let result = path.resolve("app.js"); //göreceli dosya yolunu tam yola çevirir

result = path.extname("app.js"); //dosyanın uzantısına baktık js cevabını aldık

result = path.parse(__filename)

console.log(result.root);
console.log(result.base);
console.log(result.dir);
console.log(result.ext); //uzantısı

console.log(result.name);



