//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "sss.test.1062003@gmail.com",
	Password : "7400010899sS$",
	To : 'sss.test.1062003@gmail.com',
	From : "singhshubham1062003@gmail.com",
	Subject : "<This is my heading ",
	Body : "email body",
	}).then(
		message => alert("mail sent successfully")
	);
}