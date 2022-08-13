let chars = [1, 2, 3, 4, 6, 7, 4, 3, 2, 5];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);