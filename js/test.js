let evt;

document.querySelector(".wrapper").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector(".one").classList.toggle("animation__revers");
	document.querySelector(".two").classList.toggle("animation__revers");
	document.querySelector(".three").classList.toggle("animation__revers");
	document.querySelector(".four").classList.toggle("animation__revers");
})


// for (var i = 1 ; i <= 100 ; i++ ) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log(i + "FizzBuzz");
// 	} else if (i % 3 == 0 && i % 5 !== 0) {
// 		console.log(i + " Fizz");
// 	} else if (i % 5 == 0 && i % 3 !== 0) {
// 		console.log(i + " Buzz");
// 	} else console.log(i);
// }


var image = document.getElementsByTagName('div')[3];

console.log(image);