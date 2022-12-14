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
			const selectedButton = document.getElementsByClassName(`${sectionName}Button`)[0];
			selectedButton.style.backgroundColor = 'black';
			selectedButton.style.color = 'white';
			const toBeDisplayedSection = document.getElementsByClassName(`${sectionName}Info`)[0];
			toBeDisplayedSection.style.display = 'contents';
			const toBeDisplayedHeader = document.getElementsByClassName(`${sectionName}SectionHeader`)[0];
			toBeDisplayedHeader.style.display = 'contents';
			const toBeDisplayedButtons = document.getElementsByClassName(`${sectionName}Buttons`)[0];
			toBeDisplayedButtons.style.display = 'contents';
		} else {
			const unselectedButton = document.getElementsByClassName(`${sectionName}Button`)[0];
			unselectedButton.style.backgroundColor = 'white';
			unselectedButton.style.color = 'black';
			const toBeHiddenSection = document.getElementsByClassName(`${sectionName}Info`)[0];
			toBeHiddenSection.style.display = 'none';
			const toBeHiddenHeader = document.getElementsByClassName(`${sectionName}SectionHeader`)[0];
			toBeHiddenHeader.style.display = 'none';
			const toBeHiddenButtons = document.getElementsByClassName(`${sectionName}Buttons`)[0];
			toBeHiddenButtons.style.display = 'none';
		}
	});
	const sectionInProgress = document.getElementsByClassName(`${className}Buttons`)[0];

	const sectionButtons = sectionInProgress.getElementsByClassName('singleButton');
	const selectionNum = sectionButtons.length;
	let index = 0;
	while (index < selectionNum) {
		// eslint-disable-next-line
		const button = sectionButtons[index++];
		button.onclick = () => {
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
		// console.log('hahaha!');
		insideSection(classNumber + 1);
	});
}
function setupSelection() {
	const mainPic = document.getElementsByClassName('mainPic')[0];
	mainPic.activeId = 'empty';
	insideSection(0);
}

window.onload = setupSelection();

function submitCallback() {
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
				// eslint-disable-next-line
				alert(`You haven't made selection for ${sectionName}`);
				notCompleteFlag = 1;
			} else {
				result.push(sectionSelected.activeButton);
			}
		}
	});
	if (!notCompleteFlag) {
		// eslint-disable-next-line
		alert(`Thank you for your submission! Here's your selections: \n${result}`);
	}
}

submitCallback('whyusingthiswebpack????');
