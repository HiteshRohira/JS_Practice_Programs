let check = isLandscape(40, 10);

if (check) console.log("Picture is Landscape");
else console.log("Picture is Potrait");

function isLandscape (width, height) {
    return (width > height);
}