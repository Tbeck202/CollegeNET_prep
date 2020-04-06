const steps = document.querySelectorAll('.step');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const nameNextBtn = document.querySelector('#name-btn');
const username = document.querySelector('#username');
const userNameErr = document.querySelector('#usr-name-err');
const pw = document.querySelector('#password');
const pwValidate = document.querySelector('#verifyPassword');
const pwNextBtn = document.querySelector('#pw-validate');
const pwError = document.querySelector('#pwerror');
const pwValErr = document.querySelector('#pw-val-err');
const radios = document.querySelectorAll('.radio');
const subscriptionNextBtn = document.querySelector('#subscription-btn-next');
const btns = document.querySelectorAll('button');
const nameDisplay = document.querySelector('#name-display');
const usernameDisplay = document.querySelector('#username-display');
const subscriptionDisplay = document.querySelector('#subscription-display');
const btnNext = document.querySelectorAll('.btn-next');
const btnBack = document.querySelector('#btn-back');
const btnSubmit = document.querySelector('#btn-submit');
let stepCounter = 0;

//  BUTTONS AND STEP DISPLAY LOGIC=============================
btnNext.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		toggleHidden(steps);
		btnToggle();
		stepCounter++;
		if (stepCounter > 2) {
			btnSubmit.classList.remove('hidden');
		} else {
			btnSubmit.classList.add('hidden');
		}
	});
});

btnBack.addEventListener('click', (e) => {
	e.preventDefault();
	stepCounter--;
	toggleHidden(steps);
	btnToggle(btns);
	if (stepCounter < 3) {
		btnSubmit.classList.add('hidden');
	}
});

function toggleHidden(el) {
	for (let i = 0; i < el.length; i++) {
		if (i === stepCounter) {
			el[i].classList.toggle('hidden');
			el[i + 1].classList.toggle('hidden');
		}
	}
}

function btnToggle() {
	if (stepCounter === 0) {
		btnBack.classList.toggle('hidden');
	}
}

//PASSWORD VALIDATION LOGIC=====================================
pw.addEventListener('keyup', () => {
	if (pw.value.length < 6) {
		pw.classList.add('pw-err');
	} else {
		pw.classList.remove('pw-err');
	}
	// validPw();
	pwNextBtn.disabled = true;
});

pwValidate.addEventListener('keyup', () => {
	if (validPw() === false) {
		pwNextBtn.disabled = true;
		pwValidate.classList.add('pw-err');
	} else if (validPw() === true) {
		pwNextBtn.disabled = false;
		pwValidate.classList.remove('pw-err');
	}
});

const validPw = () => {
	if (pw.value !== pwValidate.value || pw.value.length < 6) {
		// pwNextBtn.disabled = true;
		return false;
	} else {
		// pwNextBtn.disabled = false;
		return true;
	}
};
//SUBSCRIPTION LOGIC==================================================
radios.forEach((radio) => {
	radio.addEventListener('change', () => {
		// let selctedSub = document.querySelector('input[name="subscription"]:checked').value;
		// subscription = selctedSub;
		subscription = document.querySelector('input[name="subscription"]:checked').value;
	});
});

subscriptionNextBtn.addEventListener('click', () => {
	let subscription = document.querySelector('input[name="subscription"]:checked').value;
	nameDisplay.innerHTML = `${fname.value} ${lname.value}`;
	usernameDisplay.innerHTML = `${username.value}`;
	subscriptionDisplay.innerHTML = `$${subscription}`;
});
