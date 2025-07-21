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
	#numFieldCharRatio = 3;
	#numHoleRatio = 2;
	#field = [];

	constructor(row, column) {
		this.#row = row > 0 ? +row : 8;
		this.#column = column > 0 ? +column : 5;
		this.#createField();
		
	}

	#createField() {
		const components = this.#getComponentFieldPerHole();
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
			actorRow = Math.floor( Math.random() * this.#row );
			actorColumn = Math.floor( Math.random() * this.#column );
		} while( actorRow === hatRow && actorColumn === hatColumn);
		this.#field[ actorRow ][ actorColumn ] = pathCharacter;
	}

	#getComponentFieldPerHole() {
		const components = [];
		components.push( 
			...(fieldCharacter.repeat(this.#numFieldCharRatio)), 
			...(hole.repeat(this.#numHoleRatio))
		);
		return components;
	}

	print() {
		// clear();
		for( let row of this.#field) {
			console.log( row );
		}
	}
}

const newGame = new Field();
newGame.print();

/*
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

	for( let row of field) {
		console.log( row );
	}
}


// testing
print( createField(5, 3) );
// console.log( getComponentFieldPerHole(3, 2) );
*/


