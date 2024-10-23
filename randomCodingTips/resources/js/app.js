const generateTip = () => {
    // Import Tips (CommonJS)
    // const codingTips = require('./tips.js') // This is for Node.JS only

    // Array of Subjects (HTML/CSS/JS)
    const subjectsArr = Object.keys(codingTips);
    // Select Random Subject
    const randSubject = subjectsArr[Math.floor(Math.random() * subjectsArr.length)];

    // Array of Categories (Per Subject)
    const categoriesArr = Object.keys(codingTips[randSubject]);
    // Select Random Subject
    const randCategory = categoriesArr[Math.floor(Math.random() * categoriesArr.length)];

    // Array of Tips (per Subject)
    const tipsArr = codingTips[randSubject][randCategory];
    // Select Random Tip
    const randTip = tipsArr[Math.floor(Math.random() * tipsArr.length)];

    // Formatted Output
    const output = `<strong>Subject:</strong> ${randSubject} <br> <strong>Category:</strong> ${randCategory} <br> <strong>Tip:</strong> ${randTip}`;
    return output;
};

console.log(generateTip());