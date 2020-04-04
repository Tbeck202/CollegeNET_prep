const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const btn = document.querySelector('button');
const pwError = document.querySelector('#password-error');
const pwValidateError = document.querySelector('#password-validate-error');

password.addEventListener('change', () => {
	if (password.value.length < 6) {
		pwError.classList.toggle('hidden');
	} else {
		pwError.classList.add('hidden');
	}
});

btn.addEventListener('click', (event) => {
	if (password.value !== passwordConfirm.value) {
		pwValidateError.classList.toggle('hidden');
		passwordConfirm.value = '';
		event.preventDefault();
	} else if (password.value.length < 6) {
		pwError.classList.toggle('hidden');
		passwordConfirm.value = '';
		event.preventDefault();
	}
});
