"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	#row = 0;
	#column = 0;
	#field = [];

	constructor(row = 8, column = 5) {
		this.#row = row;
		this.#column = column;
		this.#field = [];
		this.#createField();
		// this.positionRow = 0;
		// this.positionCol = 0;
		// this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	#createField() {
		const components = this.#getComponentFieldPerHole(3, 1);
		const comLen = components.length;
		
		for(let i = 0; i < this.#row; i++) {
			this.#field.push([]);
			for(let j = 0; j < this.#column; j++) {
				this.#field[i].push( components[Math.floor( Math.random() * comLen )] );
			}
		}

		// ส่วน random ของ "^"
		const hatRow = Math.floor( Math.random() * this.#row );
		const hatColumn = Math.floor( Math.random() * this.#column );
		this.#field[ hatRow ][ hatColumn ] = hat;

		// ส่วน random ของ "*"
		let actorRow;
		let actorColumn;
		do {
			actorRow = Math.floor( Math.random() * row );
			actorColumn = Math.floor( Math.random() * column );
		} while( actorRow === hatRow && actorColumn === hatColumn);
		field[ actorRow ][ actorColumn ] = "*";

		return field;
	}

	#getComponentFieldPerHole(numFieldChar, numHole) {
		let components = [];
		components.push( 
			...("░".repeat(numFieldChar)), 
			...("0".repeat(numHole))
		);
		return components;
	}




	print() {
		clear();
	}
}

const newGame = new Field();
newGame.print();


function createField(row, column) {
	const components = getComponentFieldPerHole(3, 1);
	const comLen = components.length;
	let field = [];
	
	for(let i = 0; i < row; i++) {
		field.push([]);
	    for(let j = 0; j < column; j++) {
		    field[i].push( components[Math.floor( Math.random() * comLen )] );
	   }
	}
	// ส่วน random ของ "^"
	const hatRow = Math.floor( Math.random() * row );
	const hatColumn = Math.floor( Math.random() * column );
	field[ hatRow ][ hatColumn ] = "^";

	// ส่วน random ของ "*"
	let actorRow;
	let actorColumn;
	do {
		actorRow = Math.floor( Math.random() * row );
		actorColumn = Math.floor( Math.random() * column );
	} while( actorRow === hatRow && actorColumn === hatColumn);
	field[ actorRow ][ actorColumn ] = "*";

	return field;
}

function getComponentFieldPerHole(numFieldChar, numHole) {
	let components = [];
	components.push( 
		...("░".repeat(numFieldChar)), 
		...("0".repeat(numHole))
	);
	return components;
}

function print(field) {
	const rowLen = field.length;

	for(let i = 0; i < rowLen; i++) {
	   console.log(field[i]);
	}
}


// testing
print( createField(5, 3) );
// console.log( getComponentFieldPerHole(3, 2) );

