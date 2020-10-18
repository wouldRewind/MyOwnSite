//	вешаю анимацию на все заголовки

// вешаю анимацию на заголовки 1 и 2 уровня
const headers = document.querySelectorAll(["h1","h2","h3","h4"])
const animationNames = {
	fadeInLeft : "fadeInLeft",
	fadeInRight: "fadeInRight",
	zoomInRight: "zoomInRight",
	zoomInLeft: "zoomInLeft"
}
// чередую анимацию в зависимости от индекса
headers.forEach((el,i) => {
	el.setAttribute("data-wow-duration","1s");
	el.setAttribute("data-wow-delay","0s")
	if(i % 2 === 0) el.classList.add("wow","animated",animationNames.zoomInLeft)
	if(i % 2 === 1) el.classList.add("wow","animated",animationNames.zoomInRight)
})
// вешаю анимацию на все крупные блоки

const animatedBlocks = [document.querySelector('.education'),document.querySelector('.contact'),...document.querySelectorAll('.block')]

// чередую анимацию
animatedBlocks.forEach((block,i) =>{
	block.classList.add("wow","animated","fadeInLeft");
	if(i % 2 === 0) block.classList.add("wow","animated",animationNames.fadeInLeft)
	if(i % 2 === 1) block.classList.add("wow","animated",animationNames.fadeInRight)
	// block.setAttribute("data-wow-delay")
})


// нахожу блоки хард и софт скиллов
const softskillBlock = animatedBlocks.find(el=> [...el.classList].find(classname => classname === "softskills"))
const hardskillsBlock = animatedBlocks.find(el=> [...el.classList].find(classname => classname === "hardskills"))	

// почему-то анимация для блока выполняется по несколько раз - грабли

// softskills анимация
let softskillBlockAnimationCount  = 0;

softskillBlock.addEventListener("animationend",function(e){
	e.preventDefault();
	softskillBlockAnimationCount++; // грабли
	if(softskillBlockAnimationCount == 1)
	{
		// document.querySelectorAll(".skills-item__rate").forEach(el => el.classList.add("anime"))
		document.querySelectorAll(".fill").forEach(el => el.classList.add("filled"))
		// вставляю
	}
})
hardskillsBlock.addEventListener("animationend",function(e){
	e.preventDefault();
	softskillBlockAnimationCount++; // грабли
	if(softskillBlockAnimationCount == 1)
	{
		// document.querySelectorAll(".skills-item__rate").forEach(el => el.classList.add("anime"))
		document.querySelectorAll(".fill").forEach(el => el.classList.add("filled"))
		// вставляю
	}
})

// недоработано: для хардскиллов не повесил анимацию



