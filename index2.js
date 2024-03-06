 function analyzeText(text) {
 // Word Count
     const words = text.split(/\s+/).filter(word => word !== '');
     const wordCount = words.length;
    
     // Character Count
     const characterCount = text.length;
    
     // Average Word Length
     const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
     const averageWordLength = totalWordLength / wordCount;
    
     return {
     wordCount,
     characterCount,
     averageWordLength
     };
     }
    
     const text = "This is my text for text analyse tool 2024 !!!";
     const analysisResult = analyzeText(text);
    
     console.log("Word Count:", analysisResult.wordCount);
     console.log("Character Count:", analysisResult.characterCount);
     console.log("Average Word Length:", analysisResult.averageWordLength);