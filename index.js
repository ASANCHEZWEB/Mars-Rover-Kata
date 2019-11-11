//consiste en mover el rover derecha o izquierda en funcion de su posicion y mirada , al final del documento se ejecuta un comando de letras r(right),l(left),f(Forward).Actualizado la dirección y posición en el objeto Rover.

let commands = "rffrfflfrff";

let rover = {
  direction: "N",
  position: [{ x: 0, y: 0 }],

}

function turnLeft() {
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
  }
};
function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "N"
  }
};
function moveForward(rover) {

  if (rover.direction == "N" && rover.position[0].x > 0) {
    rover.position[0].x--

  } else if (rover.direction == "S" && rover.position[0].x < 10) {
    rover.position[0].x++

  } else if (rover.direction == "W" && rover.position[0].y > 0) {
    rover.position[0].y--

  } else if (rover.direction == "E" && rover.position[0].y < 10) {
    rover.position[0].y++

  } else {
    console.log("Locooo te sales de la tabla")
  }

}

function rffrfflfrff(rover) {
  let letter = "";

  for (i = 0; i <= commands.length; i++) {
    letter = commands[i];
    if (letter == "r") {
      turnRight(rover)
    } else if (letter == "f") {
      moveForward(rover)
    } else if (letter == "l") {
      turnLeft(rover)
    }
    console.log(rover.position)

  }
}
rffrfflfrff(rover)