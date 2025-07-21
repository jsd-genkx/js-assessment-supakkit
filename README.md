# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**

---

### Thinking Process

1. // step 1
2. // step 2
3. // ...
4. // step n

_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

#### 0) Plan
1) ทำความเข้าใจ requirements
2) สร้าง field สำหรับเกม
	 1) สร้าง field ที่มีจำนวน row และ column ที่กำหนดออกมาก่อน
	 2) ทำระบบสุ่มเพื่อสร้าง item ของ field ในแต่ละ cell
 3) ตัวละครของเรา สามารถเดินใน field ได้
 4) เงื่อนไขการเดินตกหลุม ตกขอบ และเจอหมวก
 5) การทำให้วนรับค่า input และจบเกมเมื่อแพ้หรือชนะได้
 6) เก็บรายละเอียด และปรับปรุงคุณภาพ code

#### 1) วิเคราะห์ requirements
- เริ่มจากทำความเข้าใจ requirements ก่อน
##### Game Rules:
1) ชนะเมื่อเจอหมวก
2) แพ้เมื่อตกหลุม
3) แพ้เมื่อเดินออกนอก field

##### Requirements:
- การสร้าง field:
	- มีการ random ตำแหน่ง holes, hat, actor
- การเดิน:
	- มี class method:
		- constructor, moveRight, moveLeft, moveUp, moveDown
	- มีการ print map
	- เดินได้ถูกต้อง และมีการ update map ตามตำแหน่งที่เดิน
	- เป็นไปตามกฎของเกม
  - เมื่ออยู่ที่ขอบ ให้เตือน user ไม่ให้ออกจากขอบ

#### 2) สร้าง field
- เริ่มที่สร้าง field ก่อน เพราะมันเป็นส่วนเริ่มต้นของส่วนอื่นๆ ทั้งหมด หากไม่มี field ก็ทำอย่างอื่นต่อไม่ได้ ดังนั้นเริ่มต้นด้วยการสร้าง field ก่อน
	- แล้วจะสร้างยังไง ใน requirements ไม่ได้กำหนดวิธีการสร้าง เพียงแต่บอกว่าต้องเป็น random แปลว่าเราสามารถสร้างยังไงก็ได้
	- ดังนั้นคิดว่า จะสร้างโดยการกำหนดจำนวน row และ column ของ field แล้วใช้วิธี random components ขึ้นมา
##### 2.1) สร้างโครงของ field
- เริ่มโดยการสร้างโครงของ field แล้วทดสอบการใส่ค่าเข้าไปก่อน
```js
function createField(row, column) {

	let field = [];
	for(let i = 0; i < row; i++) {
		field.push([]);
	    for(let j = 0; j < column; j++) {
	         field[i].push(`r${i}-c${j}`);
	   }
	}
	return field;
}
// testing
console.log( createField(2, 5) );
```
- ได้ผลลัพธ์:
```
[
  [ 'r0-c0', 'r0-c1', 'r0-c2', 'r0-c3', 'r0-c4' ],
  [ 'r1-c0', 'r1-c1', 'r1-c2', 'r1-c3', 'r1-c4' ]
]
```
- ต่อมาสร้าง function เพื่อใช้สำหรับแสดงผลให้ดูง่ายขึ้นก่อน
```js
function print(field) {

	for( row of field) {
		console.log( row );
	}
}
print( createField(2, 5) );
```
- ได้ผลลัพธ์:
```
[ 'r0-c0', 'r0-c1', 'r0-c2', 'r0-c3', 'r0-c4' ]
[ 'r1-c0', 'r1-c1', 'r1-c2', 'r1-c3', 'r1-c4' ]
```

##### 2.2 ) ทำส่วน random ของ field components
- ต่อมา ทำส่วนของการ random สำหรับแต่ละ cell ใน field
- แนวคิดคือ ต้องมี `"^"` แค่อันเดียวใน field นอกนั้นเท่าไหร่ก็ได้
- วิธีในการ random ที่จะใช้คือ ใส่ components (`"░", "O", "^"`, `"*"`) ที่จะ random เอาไว้ใน array จากนั้น random ค่าตัวเลขของ index ออกมา แล้วใส่มันเข้าไปใน cell นั้นๆ 
- แต่หาก random ไปทีละตำแหน่งเรียงไป ซึ่งทั้ง 4 components มีความน่าจะเป็นเท่ากัน
	- เมื่อ random เจอ `"^"` และ `"*"` ก็ให้ตัดออกไปจาก array ที่ random
	- ซึ่งจะทำให้ `"^"` และ `"*"` จะอยู่แค่ช่วงแรกๆ เท่านั้น เพราะจะถูก random เจอก่อน
- ที่คิดได้ตอนนี้คือ สร้างถังที่เก็บ components ทั้ง 4 มีจำนวนเท่าจำนวน block ที่ต้องการสร้างขึ้นมาไว้ แล้ว random จากในถังนี้ อันไหนเจอแล้วก็ตัดออกไป
	- วิธีนี้แก้ปัญหา `"^"` และ `"*"` ที่จะอยู่แค่ cell แรกๆ
	- แต่มันซับซ้อนเกินไป และการตัด item ใน array ที่อยู่ระหว่าง items อื่นออกก็ดูยุ่งยากเกินไป
- อีกวิธีคือ random ตำแหน่ง แล้วกำหนดให้ `"^"` อยู่ตำแหน่งนั้นก่อน ส่วน components อื่นๆ random ไปทีละตำแหน่งเรียงไป เมื่อถึงตำแหน่งที่ `"^"` กำหนดไว้ ก็เอามันใส่เข้าไป
- จริงๆ เราสามารถ replace ค่าเดิมได้ งั้นเราเอา `"^"` และ `"*"` มาใส่ทีหลัง ก็จะทำให้ code ไม่ซับซ้อน และลดกระบวนการตรวจสอบลงได้
- เขียนส่วนของ random ของ `"░"` และ `"O"` ก่อน:
```js
function createField(row, column) {
	let components = ["░", "O"];
	let field = [];
	
	for(let i = 0; i < row; i++) {
		field.push([]);
	    for(let j = 0; j < column; j++) {
		    // ส่วนที่เขียนเพิ่มเข้ามา
		    field[i].push( components[ Math.floor( Math.random() * 2 ) ] );
	   }
	}

	return field;
}

function print(field) {

	for( let row of field) {
		console.log( row );
	}
}

// testing
print( createField(5, 3) );
```
- ได้ผลลัพธ์:
```
["O", "░", "░"]
["O", "O", "░"]
["░", "░", "░"]
["░", "O", "░"]
["O", "░", "░"]
```
- เพิ่มส่วน random ของ `"^"` และ `"*"` เข้าไป:
	- ส่วนนี้ เราแค่ random ค่า index ของ row และ column มาแล้วเอา `"^"` และ `"*"` ไป replace ค่า string เดิม
	- แต่ถ้าเราเขียนเหมือนกันเลย มันมีโอกาสที่ `"^"` และ `"*"` จะไปทับกัน ขึ้นอยู่ว่าจะใส่อะไรเข้าไปก่อน
	- แก้ปัญหาโดย random แล้วใส่อันใดอันหนึ่งเข้าไปก่อน ส่วนอีกอันตรวจสอบก่อนว่า ตำแหน่งที่ random มาได้ ไม่ได้ตรงกับตำแหน่งของอันก่อนหน้า ถ้าตรงให้ random ใหม่ จนกว่าจะไม่ทับกัน
```js
function createField(row, column) {
	const components = ["░", "O"];
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
		// ตรวจสอบค่าที่ random ได้ว่าทับกับตำแหน่งของ hat ไหม ถ้าทับ random ใหม่
	} while( actorRow === hatRow && actorColumn === hatColumn);
	field[ actorRow ][ actorColumn ] = "*";

	return field;
}

function print(field) {

	for( let row of field) {
		console.log( row );
	}
}

// testing
print( createField(5, 3) );
```
- ได้ผลลัพธ์:
```
[ '*', 'O', 'O' ]
[ 'O', '░', 'O' ]
[ 'O', '^', '░' ]
[ 'O', '░', '░' ]
[ '░', '░', '░' ]
```
- แต่สังเกตว่า `"0"` มีเยอะเกินไป ทำให้หาเส้นทางเดินได้ยาก เพิ่มส่วนที่สามารถกำหนดสัดส่วนของ `"0"` และ `"░"` ได้
	- โดยหลักการ random ตอนนี้คือ random ค่า index ของ array ที่เก็บ components เอาไว้ ซึ่งมีอยู่ 2 ตัว คือ `"0"` และ `"░"`
	- ทำให้ความน่าจะเป็นในการ random ของทั้งสองเท่ากันคือ 1:1
	- วิธีที่ตรงไปตรงมาสำหรับเราตอนนี้คือ เปลี่ยนความน่าจะเป็นตรงนี้ เพื่อให้เราสามารถ random ได้ `"░"` มากกว่า `"0"`
		- โดยการเพิ่มจำนวน items เข้าไปใน array ที่ใช้ random เช่น `["░", "░", "0"]` แบบนี้ก็จะได้ความน่าจะเป็น 2:1 แล้ว
- เริ่มด้วยการสร้าง function ที่ใช้สำหรับสร้าง array ของ components นี้ขึ้นมา:
```js
function getComponentFieldPerHole(numFieldChar, numHole) {
	let components = [];
	components.push( 
		...("░".repeat(numFieldChar)), 
		...("0".repeat(numHole))
	);
	return components;
}
console.log( getComponentFieldPerHole(3, 2) );
```
- ได้ผลลัพธ์:
```
[ '░', '░', '░', '0', '0' ]
```

##### 2.3) เขียนให้อยู่ในรูปของ class

```js
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
```
- ได้ผลลัพธ์:
```
[ 'O', '*', '░', '░', '░' ]
[ '░', 'O', '░', '░', 'O' ]
[ '░', '░', '░', '░', '░' ]
[ '░', 'O', 'O', 'O', '░' ]
[ '░', '░', '░', '░', '░' ]
[ 'O', 'O', 'O', 'O', '░' ]
[ 'O', '░', 'O', '░', '░' ]
[ '^', '░', '░', '░', 'O' ]
```

#### 3) สร้างเงื่อนไข หากเดินตกขอบ หรือตกหลุมให้ game over
- ตอนนี้เรามี array ที่เก็บ field ที่เราต้องการแล้ว
- ขั้นตอนต่อมา เราจะทำให้มันเดินได้
- โดยหลักการทำงานของมันคือ
	- เราเริ่มที่ตำแหน่งใดตำแหน่งหนึ่ง ซึ่งกำหนดแล้วจากการ random ในส่วนที่แล้ว
	- เมื่อเดินไป 1 step ซึ่งจะให้มันไปเรียกใช้งาน methods การเดินมาใช้
	- จากนั้น เราต้องเช็คว่า step ต่อไปที่เดิน
		- ออกนอก field ถ้าใช่ -> game over 
		- เป็น hole หรือเปล่า ถ้าใช่ -> game over
		- หรือเป็น hat ถ้าใช่ -> win
		- เป็นขอบ field หรือเปล่า ถ้าใช่ -> warning
	- จากนั้น อัปเดทตำแหน่ง โดย replace `"*"` เข้าไปในตำแหน่งที่เดินไป
	- แล้วแสดง field map ที่อัปเดทแล้วให้ user เห็น
- โดยเริ่มจาก สร้าง method ที่ใช้เช็ค step ต่อไปที่เดินนี้ก่อน:
```js
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
```
- จากนั้นสร้าง methods การเดินในทิศต่างๆ เพื่อใช้อัปเดทค่าตำแหน่งการเดิน:
```js
#moveRight() { 
	this.#x++;
}

#moveLeft() { 
	this.#x--;
}

#moveUp() { 
	this.#y--;
	}

#moveDown() { 
	this.#y++;
}
```
- จากนั้นนำไปใส่ใน class หลัก โดยสร้างตัวแปรที่ต้องการใช้ทั้งหมดขึ้นมา และนำ `#x` และ `#y` ไปรับค่าตำแหน่งเริ่มต้น ที่ random ได้จากการสร้าง field

#### 4) ทำให้เดินได้
- สร้าง method ที่จะเรียกใช้งาน methods ในการเดินเหล่านี้:
```js
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
```

#### 5) ปรับปรุงการแสดงผล
- ปัจจุบันแสดงผลเป็นรูปแบบแถวของ array ทำให้มันดูเหมือนเกมมากขึ้นโดยการใช้ `arr.join()` เพื่อให้แต่ละ item ชิดกัน:
```js
for( let row of this.field) {
	console.log( row.join('') );
}
```











[🔝 Back to Table of Contents](#table-of-contents)
