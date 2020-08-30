let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor(styles.length)] = "Classics";

styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");