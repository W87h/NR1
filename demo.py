from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/run", methods=["POST"])
def run_code():
    code = request.json.get("code", "")
    try:
        exec_globals = {}
        exec(code, exec_globals)
        return jsonify({"result": str(exec_globals)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
