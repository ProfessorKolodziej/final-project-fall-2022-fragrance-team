// let prevDisplay = document.getElementsByClassName('occationSectionHeader')[0];
function setupSelection() {
	const mainPic = document.getElementsByClassName('mainPic')[0];
	mainPic.activeId = 'empty';
	insideSection(0);
}

setupSelection();

const url = 'https://api.baserow.io/api/database/rows/table/118884/?user_field_names=true';

const list = document.querySelector('#list');

fetch(url, { headers: { Authorization: 'Token hvolOlzFmvicJEK9B6yyyM78Yj4F7G3Z' } })
	.then((response) => response.json())
	.then((data) => {
		// eslint-ignore-next-line
		for (let i = 0; i < data.results.length; i++) {
			console.log(data.results[i]);

			const markup = `<li>
        <h2>${data.results[i].Name}</h2>
      </li>`;
			list.insertAdjacentHTML('beforeend', markup);
		}
	});

function loadRightPicture(className) {
	const mainPic = document.getElementsByClassName('mainPic')[0];
	if (mainPic !== className) {
		document.getElementsByClassName(`${mainPic.activeId}Bottle`)[0].style.display = 'none';
		document.getElementsByClassName(`${className}Bottle`)[0].style.display = 'inline';
		mainPic.activeId = className;
	}
}
function insideSection(classNumber) {
	if (classNumber > 4) return;
	const showList = ['occation',
		'fashion',
		'feeling',
		'scent',
		'price'];
	const className = showList[classNumber];
	showList.forEach((sectionName) => {
		if (sectionName === className) {
			console.log('matched! ', sectionName);
			selectedButton = document.getElementsByClassName(`${sectionName}Button`)[0];
			selectedButton.style.backgroundColor = 'black';
			selectedButton.style.color = 'white';
			toBeDisplayedSection = document.getElementsByClassName(`${sectionName}Info`)[0];
			toBeDisplayedSection.style.display = 'contents';
			toBeDisplayedHeader = document.getElementsByClassName(`${sectionName}SectionHeader`)[0];
			toBeDisplayedHeader.style.display = 'contents';
			toBeDisplayedButtons = document.getElementsByClassName(`${sectionName}Buttons`)[0];
			toBeDisplayedButtons.style.display = 'contents';
		} else {
			console.log('NOT matched ', sectionName);
			unselectedButton = document.getElementsByClassName(`${sectionName}Button`)[0];
			unselectedButton.style.backgroundColor = 'white';
			unselectedButton.style.color = 'black';
			toBeHiddenSection = document.getElementsByClassName(`${sectionName}Info`)[0];
			toBeHiddenSection.style.display = 'none';
			toBeHiddenHeader = document.getElementsByClassName(`${sectionName}SectionHeader`)[0];
			toBeHiddenHeader.style.display = 'none';
			toBeHiddenButtons = document.getElementsByClassName(`${sectionName}Buttons`)[0];
			toBeHiddenButtons.style.display = 'none';
		}
	});
	const sectionInProgress = document.getElementsByClassName(`${className}Buttons`)[0];

	const sectionButtons = sectionInProgress.getElementsByClassName('singleButton');
	const selectionNum = sectionButtons.length;
	let index = 0;
	while (index < selectionNum) {
		// eslint-ignore-next-line
		const button = sectionButtons[index++];
		button.onclick = function () {
			if (sectionInProgress.activeButton !== button.id) {
				const prevSelectedButton = document.getElementById(sectionInProgress.activeButton);
				if (prevSelectedButton) {
					prevSelectedButton.style.background = 'black';
					prevSelectedButton.style.color = 'white';
				}

				button.style.background = 'white';
				button.style.color = 'black';
				sectionInProgress.activeButton = button.id;
			}
			loadRightPicture(className);
		};
	}
	const nextButton = document.getElementsByClassName(`${className}NextButton`)[0];
	nextButton.addEventListener('click', () => {
		console.log('hahaha!');
		insideSection(classNumber + 1);
	});
};
on_click = function (classNumber) {
	insideSection(classNumber);
};
submitCallback = function () {
	const showList = ['occation',
		'fashion',
		'feeling',
		'scent',
		'price'];
	const result = [];
	let notCompleteFlag = 0;
	showList.forEach((sectionName) => {
		if (!notCompleteFlag) {
			const sectionSelected = document.getElementsByClassName(`${sectionName}Buttons`)[0];
			if (!sectionSelected.activeButton) {
				alert(`You haven't made selection for ${sectionName}`);
				notCompleteFlag = 1;
			} else {
				result.push(sectionSelected.activeButton);
			}
		}
	});
	if (!notCompleteFlag) {
		alert(`Thank you for your submission! Here's your selections: \n${result}`);
	}
};
