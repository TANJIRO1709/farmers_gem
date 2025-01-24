import nlp from "compromise";
const stopWords = new Set([
      "Andheri",
      "Bandra",
      "Navi Mumbai",
      "Juhu",
      "Malad",
      "Mumbai Airport",
      "Alibaug",
      "South Mumbai",
      "Kurla",
      "Thane",
      "Mulund",
      "Borivali",
      "Goregaon",
      "Cuffe Parade",
      "Wadala",
      "Powai",
      "Lower Parel",
      "2 BHK",
      "3 BHK",
      "1 BHK",
      "Studio apartment",
      "4 BHK penthouse",
      "Luxury villa",
      "Luxury apartment",
      "Location",
      "Proximity to transport",
      "Local amenities",
      "Market trends",
      "Connectivity",
      "Infrastructure improvements",
      "Demand",
      "Economic growth",
      "Urban development"
]);

export default function extractKeywords(sentence) {
    const doc = nlp(sentence);
    const terms = doc.terms().out("array");
    const keywords = terms.filter((word) => !stopWords.has(word.toLowerCase()));
    return keywords;
}
