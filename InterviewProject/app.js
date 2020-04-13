const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const btn = document.querySelector('#submit');
const errMsg = document.querySelector('.message');
const okBtn = document.querySelector('#ok');

btn.addEventListener('click', () => {
	if (!nameInput.value && !emailInput.value) {
		errMsg.innerText = 'Please enter your name and email';
	} else if (!nameInput.value) {
		errMsg.innerText = 'Please enter your name';
	} else if (!emailInput.value) {
		errMsg.innerText = 'Please enter your email';
	} else {
		errMsg.innerText = `Thank you ${nameInput.value}. An email has been sent to ${emailInput.value}!`;
	}
});
okBtn.addEventListener('click', () => {
	nameInput.value = '';
	emailInput.value = '';
	errMsg.innerText = '';
});
