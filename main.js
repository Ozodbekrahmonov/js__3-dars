/*JS dan types:objects */

/*let arrayObject = [45,78,'salom','matn',true,false];

console.log(arrayObject[0]);*/


/*let oddiyObject = {ism: "Olov-gulhan", yoshi: 19,};

let talabami = 'Yoq, talaba emas';
if (oddiyObject.yoshi >= 17){
    talabami = "Ha, talaba!"
}

console.log("Olov? " + talabami);*/

/*let oddiyObject = {ismi: "Mashrab", yoshi:16,};

let talabami = 'Ha,talaba'
if (oddiyObject.yoshi >= 15){
    talabami = "Ha, talaba"
}


console.log("Mashrab?" + talabami);*/

/*Date in JS*/

let sana = new Date();

sana.setFullYear(2007);

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftaKuni = sana.getDay()
let soat = sana.getHours()
let vaqt = sana.getTime()
let kunVaqti = sana.getUTCDate()
let secund = sana.getMilliseconds()
let minut = sana.getUTCMinutes()
let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]

let kunlar = ["Yakshanba","Dushanba","Seyshanba","Chorshanba","Juma","Shanba"]

document.write("Bugun "+yil+"-yil "+oylar[haftaKuni]+"-oyning "+kun+"-kuni.Haftaning esa"
               +haftaKuni+"-kuni. Haftaning esa " + kunlar[haftaKuni] + " kuni.");

sana.setFullYear(2007)
sana.setMonth(Yanvar)
sana.getDay(26)


document.write("")