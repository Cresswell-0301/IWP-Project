const subtractBtn = document.querySelector('#subtract-btn');
const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#input');

subtractBtn.addEventListener('click', () => {
	subtractBtn.addEventListener('click', () => {
		const currentValue = parseInt(input.textContent);
		if (currentValue > 0) {
			input.textContent = currentValue - 1;
		}
	});
});

addBtn.addEventListener('click', () => {
  input.textContent = parseInt(input.textContent) + 1;
});
