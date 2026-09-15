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

function CreateBoardCoordinates() {
    const coordinates = [];

    for (let column = 1; column <=7; column +=1) {
        coordinates.push( { row: 1, column} )
    }

    return coordinates;
}