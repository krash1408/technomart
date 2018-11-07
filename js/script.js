let evt;


document.querySelector(".service__delivery").addEventListener("click", function(){
	document.querySelector(".service__guarantee").classList.remove("service__item--active");
	document.querySelector(".service__credit").classList.remove("service__item--active");
	document.querySelector(".service__delivery").classList.add("service__item--active");
	
	document.querySelector(".guarantee").classList.remove("service--visible");
	document.querySelector(".credit").classList.remove("service--visible");
	document.querySelector(".delivery").classList.add("service--visible");
})

document.querySelector(".service__guarantee").addEventListener("click", function(){
	document.querySelector(".service__guarantee").classList.add("service__item--active");
	document.querySelector(".service__credit").classList.remove("service__item--active");
	document.querySelector(".service__delivery").classList.remove("service__item--active");
	
	document.querySelector(".guarantee").classList.add("service--visible");
	document.querySelector(".credit").classList.remove("service--visible");
	document.querySelector(".delivery").classList.remove("service--visible");
})

document.querySelector(".service__credit").addEventListener("click", function(){
	document.querySelector(".service__guarantee").classList.remove("service__item--active");
	document.querySelector(".service__credit").classList.add("service__item--active");
	document.querySelector(".service__delivery").classList.remove("service__item--active");
	
	document.querySelector(".guarantee").classList.remove("service--visible");
	document.querySelector(".credit").classList.add("service--visible");
	document.querySelector(".delivery").classList.remove("service--visible");
})



// slider

document.querySelector(".feature__arrow--left").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector(".feature__slide__first").classList.toggle("feature__slide__first--invisible");
	document.querySelector(".feature__slide__second").classList.toggle("feature__slide__second--visible");

})

document.querySelector(".feature__arrow--right").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector(".feature__slide__second").classList.toggle("feature__slide__second--visible");
	document.querySelector(".feature__slide__first").classList.toggle("feature__slide__first--invisible");
})
// end slider


document.querySelector(".write-us__button").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector(".write-us").classList.add("write-us--visible");
	document.querySelector(".write-us__textfield").focus();
	document.querySelector(".modal__overlay").classList.add("modal-map--visible");
})
document.querySelector(".close-button").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector(".write-us").classList.remove("write-us--visible");
	document.querySelector(".modal__overlay").classList.remove("modal-map--visible");
})
document.querySelector(".write-us").addEventListener("submit", function(evt) {
	evt.preventDefault();
	document.querySelector(".write-us").classList.remove("write-us--visible");
	document.querySelector(".modal__overlay").classList.remove("modal-map--visible");
})


document.querySelector(".map__img").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector(".modal-map").classList.add("modal-map--visible");
	document.querySelector(".modal__overlay").classList.add("modal-map--visible");
})
document.querySelector(".close-button--map").addEventListener("click", function(evt) {
	evt.preventDefault();
	console.log("ddd");
	document.querySelector(".modal-map").classList.remove("modal-map--visible");
	document.querySelector(".modal__overlay").classList.remove("modal-map--visible");
})
