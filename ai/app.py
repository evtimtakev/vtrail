from flask import Flask, render_template, request, url_for, jsonify
from ai import sentiment_classification, categorical_classification

app = Flask(__name__)

PROMPTS = {
    "sentiment": "s",
    "category": "c"
}

@app.route("/api/predict", methods=["POST"])
def make_predictions():
    input_json = request.get_json(force=True)
    prompt = input_json["prm"]

    if prompt == PROMPTS["sentiment"]:
        response = sentiment_classification(None, None, input_json["content"], input_json["filter"])
    elif prompt == PROMPTS["category"]:
        response = {}
        # response = categorical_classification(model_category, category_tokenizer, input_json["content"], input_json["filter"])
    else:
        response = {}

    dict_to_return = {"data": response}
    return jsonify(dict_to_return)


if __name__ == "__main__":
    app.run(debug=True)
