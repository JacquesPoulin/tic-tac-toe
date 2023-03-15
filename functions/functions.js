import winningCombos from '../data/winningCombos.js';

const infoDisplay = document.querySelector('#info');
const counter = document.querySelector('#count');
const reload = document.querySelector('#restart');

let go = 'cercle';
let compteur = 1;

// ! >>> FUNCTIONS <<<

// >> GamePlay
export function addGo(e) {
	const goDisplay = document.createElement('div');
	goDisplay.classList.add(go);
	e.target.append(goDisplay);
	go = go === 'cercle' ? 'croix' : 'cercle';
	infoDisplay.textContent = ` Prochain tour : ${go}`;
	compteur++;
	counter.textContent = `Coup numero : ${compteur}`;
	e.target.removeEventListener('click', addGo);
	checkScore();
	draw();
}

// >> Handle the score
export function checkScore() {
	const allSquares = document.querySelectorAll('.carre');

	winningCombos.forEach((el) => {
		const circleWins = el.every((cell) =>
			allSquares[cell].firstChild?.classList.contains('cercle')
		);
		if (circleWins) {
			infoDisplay.textContent = 'BRAVO ! Les CERCLES ont gagnés !';
			allSquares.forEach((carre) => carre.replaceWith(carre.cloneNode(true)));
			return;
		}
	});

	winningCombos.forEach((el) => {
		const crossWins = el.every((cell) =>
			allSquares[cell].firstChild?.classList.contains('croix')
		);
		if (crossWins) {
			infoDisplay.textContent = 'BRAVO ! Les CROIX ont gagnées !';
			allSquares.forEach((carre) => carre.replaceWith(carre.cloneNode(true)));
			return;
		}
	});
}

function draw() {
	if (
		compteur == 10 &&
		infoDisplay.textContent.includes('Prochain tour : croix')
	) {
		infoDisplay.textContent = `OUPS ! Il n'y a pas de vainqueurs ..`;
		reload.textContent = 'REJOUER';
	}
}

// >> Restart the game
export function restart() {
	window.location.reload();
}
