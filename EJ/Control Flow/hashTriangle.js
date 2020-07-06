let hashString = "";
for(let count = 1; count <= 7; count++){
    hashString = "#";
    while(hashString.length < count){
        hashString += "#";
    }
    console.log(hashString);
}
