

function diskon(x) {
    let musimPandemik = (x * 50)/100
return musimPandemik
}
let sale = diskon (80000)
console.log(sale) // Output: 40000


function sayHiTo(name) {
    let halo = `Hai ${name.toUpperCase()}!`
return halo
}
let test1 = sayHiTo("bujang") 
console.log(test1)
// Output: Hai BUJANG!
let test2 = sayHiTo(100)
console.log(test2)
// Output: TypeError: name.toUpperCase is not a function


function sapaan(namaUser)
{console.log("Selamat datang" + namaUser +
"di Fakebook, let's start your journey!");}
sapaan("Bujang") // output: Selamat datang Bujang di Fakebook, let's start your journey!




function diskonBirthday(x) {
	let birthdaySale = (x * 50)/100 
	return birthdaySale
}

let sale = diskonBirthday(70000) 
console.log(sale) // Output: 35000

//function declaration
//Function yang telah dideklarasikan sebelumnya dan akan dieksekusi jika dipanggil.
function kuadrat(x)
    {return x*x;}

//function expression
//Function yang disimpan ke dalam suatu variabel. Setelah disimpan, maka variabel tersebut baru dapat digunakan sebagai function.
var myFunction = function() {
    console.log(myFunction)
    }



//KODE 1
test();
function test() {
    console.log('Hallo bujang!');
}; //output expected: hello bujang!



// KODE 2
test2();
const test2 = function() {
	console.log('Hallo bujang!');
}; //output expected : referance error


﻿

//Sebelum currying
function hitungVolume (p, l, t) {
return p * l * t;
}
console.log(hitungVolume(8, 9, 5));
// output: 360


//Setelah currying
function hitungVolume (p) {
	return function (l) {
		return function (t) { return p * 1 * t;
		}
	}
}
console.log(hitungVolume(8)(9)(5));
// output :40

