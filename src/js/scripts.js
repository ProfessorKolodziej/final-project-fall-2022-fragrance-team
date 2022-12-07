// Add your scripts here
const parentBgEl = document.querySelector('.bg');
const childEls = document.querySelectorAll('.container .text span');

childEls.forEach((el) => {
	el.addEventListener('mouseover', () => {
		const id = el.getAttribute('data-id');
		const bgEl = parentBgEl.querySelector(`.id-${id}`);

		parentBgEl.querySelectorAll('img').forEach((img) => {
			// eslint-disable-next-line
			img.style.animation = '';
			// eslint-disable-next-line
			img.style.display = 'none';
		});
		bgEl.style.display = 'block';
		bgEl.style.animation = 'anima 1s ease forwards';
	});
});

/*const url = 'https://api.baserow.io/api/database/rows/table/118884/?user_field_names=true';*

const list = document.querySelector('#list');

fetch(url, { headers: { Authorization: `Token hvolOlzFmvicJEK9B6yyyM78Yj4F7G3Z` } })
  .then(response => response.json())
  .then(function(data) {
    for ( let i = 0; i < data.results.length; i++ ) {
      console.log(data.results[i]);
      
      const markup = `<li>
        <h2>${data.results[i]["Name"]}</h2>
      </li>`
      list.insertAdjacentHTML('beforeend', markup);
    }
});*/
