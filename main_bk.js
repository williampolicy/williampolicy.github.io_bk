const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

async function generateText() {
    const prompt = "Once upon a time";

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 50,
            n: 1,
            stop: null,
            temperature: 0.5
        })
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        const generatedText = data.choices[0].text;
        document.getElementById("output").innerHTML = generatedText;
    } catch (error) {
        console.error("Error:", error);
    }
}
