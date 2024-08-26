import numpy as np
from transformers import pipeline

max_features = 6479
max_len = 151
sentiment_positions = [-1, 0, 1]
MODEL = "cardiffnlp/twitter-roberta-base-sentiment-latest"
sentiment_task = pipeline("sentiment-analysis", model=MODEL, tokenizer=MODEL)


def sentiment_classification(model, loaded_tokenizer, data, filter=1):
    predictions = {
        "negative": [],
        "neutral": [],
        "positive": []
    }

    for t in data:
        text = t["title"]
        text = preprocess(text)
        label = sentiment_task(text)[0]["label"]
        score = sentiment_task(text)[0]["score"]
        prediction = 0

        if label == 'positive' and np.round(float(score), 4) > 0.55:
            prediction = 1
        elif label == 'negative' and np.round(float(score), 4) > 0.55:
            prediction = -1

        if prediction == -1:
            predictions["negative"].append(t)
        elif prediction == 1:
            predictions["positive"].append(t)
        else:
            predictions["neutral"].append(t)

    if filter == 0:
        return predictions["neutral"]
    elif filter == 1:
        return predictions["positive"]
    else:
        return predictions["negative"]


# Preprocess text (username and link placeholders)
def preprocess(text):
    new_text = []

    for t in text.split(" "):
        t = '@user' if t.startswith('@') and len(t) > 1 else t
        t = 'http' if t.startswith('http') else t
        new_text.append(t)
    return " ".join(new_text)


def categorical_classification(model, loaded_tokenizer, data, filter=1):
    return None

