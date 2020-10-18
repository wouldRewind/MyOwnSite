const mailForm = document.getElementById("mailForm");
const btn = document.getElementById("btn");
mailForm.style.position = "relative"; // создаю анимационный блок

const anim = document.createElement("span");
anim.textContent = "Отправлено!"; // пихаю в форму анимационный блок

anim.classList.add('formMailer');
mailForm.append(anim);
btn.addEventListener("click", function (e) {
  e.preventDefault();
  anim.classList.toggle("mailed");
  setTimeout(function () {
    anim.classList.toggle('mailed');
  }, 1000);
});