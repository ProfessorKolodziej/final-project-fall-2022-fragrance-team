// Add your scripts here
const parentBgEl = document.querySelector('.bg');
const childEls = document.querySelectorAll('.container .text span');

childEls.forEach((el) => {
	el.addEventListener('mouseover', () => {
		const id = el.getAttribute('data-id');
		const bgEl = parentBgEl.querySelector(`.id-${id}`);

		parentBgEl.querySelectorAll('img').forEach((img) => {
			img.style.display = 'none';
			img.style.animation = '';
		});
		bgEl.style.display = 'block';
		bgEl.style.animation = 'anima 1s ease forwards';
	});
});
