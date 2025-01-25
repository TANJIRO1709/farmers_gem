import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const generationConfig = {
    temperature: 0.2,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export const systemInstruction=`
        A Real Estate Price Predictor is an AI-powered model designed to accurately estimate property prices based on various factors such as location, property size, amenities, market trends, and economic conditions. By leveraging machine learning algorithms, this model analyzes historical data, evaluates current market conditions, and predicts future property values with high precision. It considers consumer-specific needs, such as budget, preferred locality, and property features, ensuring personalized recommendations. This AI tool helps homebuyers, sellers, and investors make informed decisions, reducing the risk of overpaying or undervaluing properties. Additionally, it enhances transparency in the real estate market, streamlines negotiations, and optimizes financial planning for buyers and sellers.
`;
