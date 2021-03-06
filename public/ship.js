import Space from "./space.js"

console.log("SHIP CLASS IS MERGED");
//Console output to test if 'ship.js' was correctly implemented into 'index.html'

class Ship { //New class 'Ship' that stores a variable 'length'
  constructor(length, space, dir) { //Ship Object constructor that takes in variable 'length'
    this.length = length; //Given length of a ship object (1, 2, 3 ,4, and 5)
    this.isSunk = false;
    this.dir = dir;
    this.space = space;
    this.List = [];

    for (let i = 0; i < length; i++) {
      if (i == 0) {
        this.List.push(space);
      }
      else if (dir == 'u') {
        this.List.push(new Space((space.coordinate.x - i), (space.coordinate.y)));
      }
      else if (dir == 'd') {
        this.List.push(new Space((space.coordinate.x + i), (space.coordinate.y)));
      }
      else if (dir == 'l') {
        this.List.push(new Space((space.coordinate.x), (space.coordinate.y - i)));
      }
      else if (dir == 'r') {
        this.List.push(new Space((space.coordinate.x), (space.coordinate.y + i)));
      }

    }
  }

  getLength() { //Getter that returns the 'length' of the ship object
    return this.length;
  }

  getCounter() {  //Getter that returns the 'counter' variable when called
    return this.counter;
  }

  setCounter(x) { //Setter that modifys the 'counter' variabe when called
    this.counter = x;
  }

  sunk() { //'Ship' method that uses parameters 'length' and 'counter' to check if a sink has occured
    if (this.length == this.counter)
      return true;
    else
      return false;
  }
}


/*var p1ShipContainer = new Array();

}
*/



var p1ShipContainer = new Array();
var p2ShipContainer = new Array();
//Temporary 'containers' that holds 'Ship' objects from player 1 and player 2

/*
*FOR LOOP
* Pre: None
* Params: i
* Post: 5 'Ship' objects are created of length 1,2,3,4 and 5 for both players
*/
for (let i = 0; i < 5; i++) {
  p1ShipContainer[i] = new Ship(i + 1);
  console.log("p1 Ship " + (i + 1) + " created");
  p2ShipContainer[i] = new Ship(i + 1);
  console.log("p2 Ship " + (i + 1) + " created");
}

