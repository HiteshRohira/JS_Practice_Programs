function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 4; i++) {
  console.log(random(1, 2));
}