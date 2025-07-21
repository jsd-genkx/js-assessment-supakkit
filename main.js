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
	row = 0;
	column = 0;
	numFieldCharRatio = 3;
	numHoleRatio = 1;
	field = [];
	gameActive = true;
	x = 0;
	y = 0;
	xMax = 0;
	yMax = 0;
	warnBoundingField = false;

	constructor(row, column) {
		this.row = row > 0 ? +row : 10;
		this.column = column > 0 ? +column : 10;
		this.yMax = this.row - 1;
		this.xMax = this.column - 1;
		this.createField();
	}

	createField() {
		const components = this.getComponentFieldPerHole();
		const comLen = components.length;
		
		for(let i = 0; i < this.row; i++) {
			this.field.push([]);
			for(let j = 0; j < this.column; j++) {
				this.field[i].push( components[Math.floor( Math.random() * comLen )] );
			}
		}

		// ส่วน random ของ "^"
		const hatRow = Math.floor( Math.random() * this.row );
		const hatColumn = Math.floor( Math.random() * this.column );
		this.field[ hatRow ][ hatColumn ] = hat;

		// ส่วน random ของ "*"
		let actorRow;
		let actorColumn;
		do {
			actorRow = Math.floor( Math.random() * this.row );
			actorColumn = Math.floor( Math.random() * this.column );
		} while( actorRow === hatRow && actorColumn === hatColumn);
		this.field[ actorRow ][ actorColumn ] = pathCharacter;

		// ตำแหน่งเริ่มต้นในการเดินที่ได้จากการ random
		this.y = actorRow;
		this.x = actorColumn;
	}

	getComponentFieldPerHole() {
		const components = [];
		components.push( 
			...(fieldCharacter.repeat(this.numFieldCharRatio)), 
			...(hole.repeat(this.numHoleRatio))
		);
		return components;
	}

	print() {
		clear();
		for( let row of this.field) {
			console.log( row.join('') );
		}
		this.warnBoundingField ? console.log("You are in bounding field.") : null;
	}

	checkStep() {
		this.warnBoundingField = false;

		if (this.x < 0 || this.x > this.xMax || this.y < 0 || this.y > this.yMax) {
			this.gameEnded("You moved outside.");
			return;
		}
		else if (this.field[this.y][this.x] === hole) {
			this.gameEnded("You fell in a hole.");
			return;
		}
		else if (this.field[this.y][this.x] === hat) {
			this.gameEnded("You found your hat.");
			return;
		}
		else if ( this.x === 0 || this.x === this.xMax || this.y === 0 || this.y === this.yMax) {
			this.warnBoundingField = true;
		}

		this.updatePath();
	}

	gameEnded(message) {
		this.gameActive = false;
		console.log(message);
	}

	updatePath() {
		console.log(`y: ${this.y}, x: ${this.x}`);
		this.field[this.y][this.x] = pathCharacter;
	}

	moveRight() { 
		this.x++;
	}

	moveLeft() { 
		this.x--;
	}

	moveUp() { 
		this.y--;
	}

	moveDown() { 
		this.y++;
	}

	run() {
		while(this.gameActive) {
			this.print();
			const direction = prompt("Which way? ");
			
			switch(direction) {
				case 'a':
					this.moveLeft();
					this.checkStep();
					break;
				case 'd':
					this.moveRight();
					this.checkStep();
					break;
				case 'w':
					this.moveUp();
					this.checkStep();
					break;
				case 's':
					this.moveDown();
					this.checkStep();
					break;
				case 'q':
					this.gameEnded("You exited the game.");
					break;
				default:
					console.log("Your input is invalid. Try again.");
			}
		}
	}

}

const newGame = new Field();

newGame.run();



