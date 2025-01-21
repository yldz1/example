//burda denemeler yapıcam çarpım tablosu deneyelim bakalım 
for (let i; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + (i * j));
    }
}//bu kod çarpım tablosunu yapar teker teker çarpar 


//asal sayı bulma döngüsü yapalım bakalım . kendinden başkasına bölünmeyen rakama asal sayı denir.
//let a =Math.floor(7.9);
//console.log(a);  bu değerler buçuklu kısımları atar ve kodu en yakın değere yuvarlar .ondalıklı sayının küsüratını atar ve net sayıyı göre işler . 7 yi sayar yani .
let sayi = Number(prompt("lütfen bir sayı giriniz:"));
let sonuc = true;
for (let i = 2; i <= Math.floor(sayi / 2); i++); {//i ye artırarak gidiyor burda.
    if (sayi % i == 0) {
        //2 ye tam bölünüyosa asal değişldir. 
        sonuc = false;
        break;

    }
}
if (sonuc) {
    alert(sayi + "sayı asaldır.");
} else {
    alert(sayi + "sayi asal değildir.")
}


//faktöriel hesaplama yapalım . bir sayıyı yazııyorsun ve onun çarpımını buluyor .
let sayim = Number(prompt("bir sayı giriniz:"));
let carpim = 1;

for (let i = 1; i <= sayi; i++) {
    carpim = carpim * i;
}
alert("sonuc" + carpim);


//153--370--407 bunlar armstrong sayısı oluyor rakamların küpünün toplamı kendisini veriyor mu ona bakıyoruz.



