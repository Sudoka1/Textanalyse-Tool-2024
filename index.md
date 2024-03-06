Entwickle ein Textanalyse-Tool in JavaScript, das verschiedene statistische Informationen über einen vom Benutzer eingegebenen Text liefert. Das Tool sollte folgende Funktionen bieten:
1-Eingabe eines Texts: Das Programm sollte den Benutzer auffordern, einen beliebigen Text einzugeben.
2-Analyse des Textes: Das Programm soll folgende Statistiken berechnen und ausgeben:
               Anzahl der Wörter im Text.
               Anzahl unterschiedlicher Wörter.
               Längstes Wort im Text.
               Häufigkeit jedes Wortes im Text (z.B. "das: 4, ist: 3, ein: 2").
3-Funktionen für die Analyse: Implementiere spezifische Funktionen für jede Analyseaufgabe. Verwende dabei String- und Array-Methoden für die Verarbeitung.
4-Fehlerbehandlung und Validierung: Stelle sicher, dass der eingegebene Text gültig ist und behandele mögliche Fehlerquellen.
Hinweise:
               Überlege, wie du den Text am besten in Wörter aufteilen und zählen kannst (z.B. mit split()).
               Verwende Objekte oder Maps für die Zählung der Wortfrequenz.
               Achte auf Sonderfälle wie Zeichensetzung und Groß-/Kleinschreibung.
Beispiel:
Eingabe: "Hallo Welt, hallo JavaScript!"
   Ausgabe:Wortanzahl: 4
   Unterschiedliche Wörter: 3
   Wortfrequenz: "hallo: 2, welt: 1, javascript: 1"
   Längstes Wort: "JavaScript"