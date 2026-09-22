const CATEGORIES = [
    { id: "maantieto", name: "Geography" },
    { id: "yleistieto", name: "General" },
    { id: "historia", name: "History" },
    { id: "taide ja kulttuuri", name: "Arts" },
    { id: "tide", name: "science" },
    { id: "urheilu", name: "Sports" }
];

const BOARD_SIZE = 18;
const boardElement = document.querySelector("#board");

CreateBoard();

function CreateBoardCoordinates() {
    const coordinates = [];

    for (let column = 1; column <=7; column +=1) {
        coordinates.push( { row: 1, column} )
    }
    for (let row = 2; row <= 4; row += 1) {
        coordinates.push( {row, column: 7} )
    }
    for (let column = 6; column >= 1; column -=1) {
        coordinates.push( { row: 4, column } )
    }
    for (let row = 3; row >= 2; row -= 1) {
        coordinates.push( {row, column: 1} )
    }

    return coordinates;
}

function CreateBoard() {
    const coordinates = CreateBoardCoordinates();
    boardElement.innerHTML = "";

    for (let index = 0; index < BOARD_SIZE; index += 1) {
        const category = CATEGORIES[index % CATEGORIES.length]
        const coordinate = coordinates[index]

        const newSpace = document.createElement("div");

        newSpace.className = "space";

        newSpace.textContent = category.name;

        boardElement.append(newSpace);
    }
}

