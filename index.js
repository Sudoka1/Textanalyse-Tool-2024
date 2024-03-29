// Function to prompt user for text input
// 

function getTextStatistics(text) {
    // Überprüfe, ob der eingegebene Text gültig ist
    if (!text || typeof text !== 'string') {
        return "Ungültiger Text. Bitte geben Sie einen Text ein.";
    }

    // Teile den Text in Wörter auf
    const words = text.split(/\s+/);

    // Zähle die Anzahl der Wörter
    const wordCount = words.length;

    // Zähle die Anzahl unterschiedlicher Wörter
    const uniqueWords = new Set(words);
    const uniqueWordCount = uniqueWords.size;

    // Finde das längste Wort
    const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');

    // Zähle die Häufigkeit jedes Wortes
    const wordFrequency = {};
    words.forEach(word => {
        const lowercaseWord = word.toLowerCase();
        wordFrequency[lowercaseWord] = (wordFrequency[lowercaseWord] || 0) + 1;
    });

    // Erstelle die Ausgabe
    const output = `
        Wortanzahl: ${wordCount}
        Unterschiedliche Wörter: ${uniqueWordCount}
        Wortfrequenz: ${Object.entries(wordFrequency).map(([word, count]) => `${word}: ${count}`).join(', ')}
        Längstes Wort: ${longestWord}
    `;

    return output;
}


// Beispielaufruf
const userInput = prompt("Geben Sie einen Text ein:");
const result = getTextStatistics(userInput);
console.log(result);