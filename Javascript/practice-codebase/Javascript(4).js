let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

let passedStudents = scores.filter(score => score >= 50).length;

let report = scores.map(
    (score, index) => `Student ${index + 1}: ${score}`
);

console.log("Scores:", report.join("\n"));
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passedStudents);
