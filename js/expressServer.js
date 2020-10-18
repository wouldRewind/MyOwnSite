// привязка к почте
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sender = "nikimau02@mail.ru";
var transporter = nodemailer.createTransport({
  service: '@mail.ru',
  auth: {
    user: sender,
    pass: 'hrgrekjgreiu5u4t5h7g9r'
  }
});



function Send(receiver) {
	console.log("Я могу отправить почту сюда :" + receiver);
  transporter.sendMail({
	from: sender,
	to: receiver,
	subject: 'Спасибо, что посетили мой сайт',
	text: `Вы можете связаться со мной по телефону: 8-920-009-35-58
				или по почте: nik.152002@mail.ru`
  }, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:' + info.response);
    }
  });
}

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/example', (req, res) => {
    console.log("/example");
	 console.log(Send);
	 const receiver = req.body.email;
	 Send(receiver);
	 res.end(receiver)
	
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});