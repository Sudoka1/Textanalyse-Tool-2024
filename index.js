// function analyzeText(text) {
// // Word Count
//     const words = text.split(/\s+/).filter(word => word !== '');
//     const wordCount = words.length;
    
//     // Character Count
//     const characterCount = text.length;
    
//     // Average Word Length
//     const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
//     const averageWordLength = totalWordLength / wordCount;
    
//     return {
//     wordCount,
//     characterCount,
//     averageWordLength
//     };
//     }
    
//     const text = "This is a sample text for text analysis.";
//     const analysisResult = analyzeText(text);
    
//     console.log("Word Count:", analysisResult.wordCount);
//     console.log("Character Count:", analysisResult.characterCount);
//     console.log("Average Word Length:", analysisResult.averageWordLength);

// Function to prompt user for text input
function getTextFromUser() {
    let text = prompt("Please enter any text:");
    return text;
}

// Function to analyze the text and calculate statistics
function analyzeText(text) {
    let words = text.match(/\w+/g);
    let uniqueWords = new Set(words);
    let longestWord = words.reduce((a, b) => a.length >= b.length ? a : b);
    
    let wordFrequency = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
    
    return {
        wordCount: words.length,
        uniqueWordCount: uniqueWords.size,
        longestWord: longestWord,
        wordFrequency: wordFrequency
    };
}

// Main function to run the text analysis tool
function runTextAnalysis() {
    let text = getTextFromUser();
    
    if (text) {
        let analysisResult = analyzeText(text);
        console.log("Number of words in the text: " + analysisResult.wordCount);
        console.log("Number of unique words in the text: " + analysisResult.uniqueWordCount);
        console.log("Longest word in the text: " + analysisResult.longestWord);
        console.log("Word frequency in the text:");
        for (let word in analysisResult.wordFrequency) {
            console.log(`${word}: ${analysisResult.wordFrequency[word]}`);
        }
    } else {
        console.log("Invalid input. Please enter a valid text.");
    }
}

// Run the text analysis tool
runTextAnalysis();