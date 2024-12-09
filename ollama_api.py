from flask import Flask, request, jsonify
import subprocess
import json

app = Flask(__name__)

# Define a route for handling requests
@app.route("/query", methods=["POST"])
def query_ollama():
    user_input = request.json.get('input')
    
    # Call Ollama using a subprocess (adjust as needed)
    # For this example, assume Ollama is running with a CLI tool.
    command = ["ollama", "generate", "--input", user_input]
    result = subprocess.run(command, capture_output=True, text=True)
    
    response = result.stdout  # Or parse the result if needed

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
