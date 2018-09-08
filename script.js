
const items = document.getElementsByTagName('li');


const itemsArray = Array.from(items);
const hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

itemsArray.forEach(item => {
	let hexColor = '#';
	for(let i = 0; i < 6; i++) {
		let randomSymbol = Math.floor(Math.random() * hexSymbols.length);
		hexColor += hexSymbols[randomSymbol];
	}
	item.style.backgroundColor = hexColor;
});


items[Math.floor(Math.random()*items.length)].addEventListener('click', function() {
	alert('Wygrałeś')
});







