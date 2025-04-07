let value;

//veri tiplerini string e çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);
value = (10).toString();

// veri tiplerini sayılara çevirme

value = Number("123");
value = Number(null); // 0 döndürür
value = Number(undefined);  //NaN döndürür
value = Number("hello world");  //NaN not a number döndürür
value = Number(function(){console.log()});  //NaN döndürür.
value = Number([1,2,3,4]);   //NaN
value = Number("3.14");
value = parseFloat("12.3");
value = parseInt("123");

const a = "hello" + 34; //yan yana yazdırır
const b = "43" + 34;
const c = Number("34") + 52 ; //normal toplama yaptırır.

 console.log(c);

 console.log(b);
 console.log(typeof b);