let feedback =
    "Great product! Fast delivery and amazing sound quality!";

let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

let lowerFeedback = feedback.toLowerCase();

let containsNegativeWord =
    lowerFeedback.includes("bad") ||
    lowerFeedback.includes("poor");

console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

if (containsNegativeWord) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
