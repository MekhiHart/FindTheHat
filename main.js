// const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this.field = field;

        this.rowLength;
        this.coumnLength;
        this.xPos;
        this.yPos;

        this.setProperties(); // * Sets position of player
      } // * Constructor

// * ---------------------- Methods ----------------------

    setProperties(){ // * Find location of player
        this.rowLength = this.field.length; // * Sets these properties too
        this.columnLength = this.field[0].length;

        for (let row = 0; row < this.rowLength; row++ ){
            for (let column = 0; column < this.columnLength; column++  ){
                if (this.field[row][column] === "*"){ // ! For some reason this runs twice
                     // * Sets position of player
                    this.xPos = column;
                    this.yPos = row;
                    break;
                }

            }
        }
    } // * findPlayer()

    movePlayer(move){ // * returns false if move is not valid
        move = move.toLowerCase();
        switch (move){
            case "u": // ! Move up
                if (this.validateMove(move)){ // * if move is valid
                    this.yPos += 1;
                }

            case "d": // ! Move down
                if (this.validateMove(move)){
                    this.yPos -= 1;
                }
            case "l": // ! Move left
                if (this.validateMove(move)){ // 
                    this.xPos += 1;
                }

            case "r": // ! Move right
                if (this.validateMove(move)){
                    this.xPos -= 1;
                }
        }
    }

    validateMove(move){
        switch (move){

            // * Vertical Movement
            case "u": // ! up movement
                if (this.yPos != 0){
                    console.log("Valid up")
                    return true
                }
                console.log("Invalid up")
                return false;

            case "d": // ! down movement
                if (this.yPos != this.rowLength - 1 ){
                    console.log("Valid down")
                    return true
                }
                console.log("Invalid Down");
                return false


            // * Horizontal Movement
            case "l": // ! left movement
                if (this.xPos != 0){
                    console.log("Valid left")
                    return true
                }
                console.log("InValid left")
                return false;

            case "d": // ! right movement
                if (this.xPos != this.columnLength - 1 ){
                    console.log("Valid right")
                    return true
                }
                console.log("Invalid right");
                return false

        }
    }

  print(){ // * Prints Board
    this.field.forEach(arr=>{
        let boardLayout = ``;
        arr.forEach(character =>{
            boardLayout += ` ${character}`;
        })
        console.log(boardLayout);


    })
  } // * print()
  
}


// * ---------------------- Main ----------------------

const myField = new Field([
  ['░', '░', 'O'],
  ['░', 'O', '░'],
  ['*', '^', '░'],
]);

myField.print();

myField.movePlayer("l");

