showStars(7);

function showStars(rows) {
    for(let row = 1; row <= rows; row++){
        let rowString = "";
        for(let i = 0; i < row; i++)
            rowString += "* ";
        console.log(rowString);
    }
}
