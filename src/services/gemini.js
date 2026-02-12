import { GoogleGenerativeAI } from "@google/generative-ai";
import { PERSONAS } from "../data/personas";

const API_KEY = "AIzaSyDMKEeyi9d8j140vSajR7J_9RzWrPkWMXg";

let genAI = null;

const initializeGenAI = () => {
    if (!API_KEY) {
        console.error("Gemini API Key is missing! Please check your .env file.");
        return;
    }
    if (!genAI) {
        genAI = new GoogleGenerativeAI(API_KEY);
    }
};

export const sendMessageToGemini = async (message, chatHistory, artist) => {
    try {
        initializeGenAI();
        if (!genAI) {
            return "I'm sorry, my connection to the muse is broken. Please check your API configuration.";
        }

        const systemInstruction = PERSONAS[artist] || "You are a helpful assistant.";

        // Initialize model with specific system instruction for the current artist
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: systemInstruction
        });

        // Construct history including system instruction as context
        // Gemini API supports `systemInstruction` in config, but for simplicity 
        // and robust context in single-turn or multi-turn, we'll prepend it 
        // or let the chat session handle it if we used startChat.
        // For this implementation, let's use a simple prompt construction 
        // that ensures the persona is adhered to for every message.

        const chat = model.startChat({
            history: chatHistory.map(msg => ({
                role: msg.isUser ? "user" : "model",
                parts: [{ text: msg.text }]
            }))
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        return "I am unable to speak right now. The colors are swirling too chaotically.";
    }
};


