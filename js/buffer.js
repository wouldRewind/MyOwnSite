const post = document.getElementById("post")
const phone = document.getElementById("phone")
const postValue = document.querySelector("#post p");

const activeTime = 1000; // ms

post.addEventListener("click",function(e){
	e.preventDefault();
	const postValue = document.querySelector("#post p").innerText.replace("Скопировано!","");
	// копирую значение почты в буфер обмену
	navigator.clipboard.writeText(postValue)
	.then(() => {
		const buffer = document.querySelector("#mailBuffer")
		buffer.classList.toggle('active')
		setTimeout(() => {
			buffer.classList.toggle('active')
	},activeTime)
	}
	)
})

phone.addEventListener("click",function(e)
{
	e.preventDefault();
	const phoneValue = document.querySelector("#phone p").innerText.replace("Скопировано!","");
	// пихаю в буфер
	navigator.clipboard.writeText(phoneValue)
	.then(() => {
		const buffer = document.querySelector("#phoneBuffer")
		buffer.classList.toggle('active')
		setTimeout(() => {
			buffer.classList.toggle('active')
	},activeTime)
	})
})





// const mailForm = document.getElementById("mailForm")
// mailForm.setAttribute('action',`index'\'index`)