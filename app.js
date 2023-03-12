import { addGo, restart } from './functions/functions.js';
import startCells from './data/startCells.js';

const gameBoard = document.querySelector('#gameboard');
const counter = document.querySelector('#count');
const infoDisplay = document.querySelector('#info');
const reload = document.querySelector('#restart');

let compteur = 1;

infoDisplay.textContent = "C'est le tour des CERCLES";
counter.textContent = `Coup numero : ${compteur}`;

const createBoard = () => {
	startCells.forEach((_cell, index) => {
		const cellElement = document.createElement('div');
		cellElement.classList.add('carre');
		cellElement.id = index;
		gameBoard.append(cellElement);
		cellElement.addEventListener('click', addGo);
	});
};

// >> Draw the board
createBoard();

// >> Restart the game
reload.addEventListener('click', restart);
