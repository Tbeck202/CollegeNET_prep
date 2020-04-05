document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.form-input').forEach((input) => {
		input.addEventListener('input', () => {
			input.className = input.className.replace(/form-input-error ?/, '');
		});
	});
});

const form = document.querySelector('.form');
const name = document.querySelector('#name');
const nameError = document.querySelector('#name-error');
const items = document.querySelector('#numitems');
const itemError = document.querySelector('#item-error');
const deliveryDate = document.querySelector('#deliveryDate');
const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

btn.addEventListener('click', (event) => {
	if (name.value === '') {
		nameError.innerHTML = 'This field cannot be empty!';
		name.classList.add('form-input-error');
	} else if (items.value > 5) {
		itemError.innerHTML = "You can't order more than five items!";
		items.classList.add('form-input-error');
	} else {
		console.log(`Name: ${name.value}`);
		console.log(`Items: ${items.value}`);
		console.log(`Delivery date: ${deliveryDate.value}`);
	}
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
});

//form-input-error
