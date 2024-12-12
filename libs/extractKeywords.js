import nlp from "compromise";
const stopWords = new Set([
      "rate",
        "temperature",
        "answer",
        "rice",
        "summer",
        "coimbatore",
        "chennai",
        "millet",
        "sustainability",
        "practices",
        "agricultural",
        "192",
        "sugarcane",
        "regional",
        "will",
        "success",
        "crop",
        "techniques",
        "rainfall",
        "quality",
        "optimization",
        "winter",
        "cotton",
        "productivity",
        "failure",
        "seasonal",
        "adoption",
        "water",
        "level",
        "farming",
        "yield",
        "monsoon",
        "post",
        "madurai",
        "179",
        "irrigation",
        "variation",
        "succeed",
        "groundnut",
        "season",
        "adaptation",
        "suitability",
        "soil",
        "requirements"
]);

export default function extractKeywords(sentence) {
    const doc = nlp(sentence);
    const terms = doc.terms().out("array");
    const keywords = terms.filter((word) => !stopWords.has(word.toLowerCase()));
    return keywords;
}