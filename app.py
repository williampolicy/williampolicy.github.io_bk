from flask import Flask, request, jsonify
from flask import render_template

import openai
import os

from dotenv import load_dotenv
load_dotenv()
openai_api_key = os.environ["OPENAI_API_KEY"]


# Set your API key here
#openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_text(prompt):
    completions = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=150,
        n=1,
        stop=None,
        temperature=0.5,
    )

    message = completions.choices[0].text.strip()
    return message



app = Flask(__name__)

# ...

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    user_input = data["user_input"]
    gpt_output = generate_text(user_input)
    return jsonify({"gpt_output": gpt_output})


# @app.route("/generate", methods=["POST"])
# def generate_text():
#     input_text = request.json["input_text"]
    
#     # Call GPT-4 API here with the input_text and get the generated_text
#     # For example:
#     # generated_text = openai.generate_text(input_text)
#     # In this example, I'll use a simple string to simulate the GPT-4 response.
#     generated_text = f"Generated text for: {input_text}"
    
#     return jsonify({"generated_text": generated_text})

if __name__ == "__main__":
    app.run(debug=True)
