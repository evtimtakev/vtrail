import numpy as np
from tensorflow import keras
from keras.preprocessing.sequence import pad_sequences
import pickle
from io import open

max_features = 6479
max_len = 151
sentiment_positions = [-1, 0, 1]


def sentiment_classification(model, loaded_tokenizer, data, filter=1):

    predictions = {
        "negative": [],
        "neutral": [],
        "positive": []
    }

    for t in data:
        sequence = loaded_tokenizer.texts_to_sequences([t["description"]])
        test_padded = pad_sequences(sequence, maxlen=max_len)

        prediction = sentiment_positions[np.around(model.predict(test_padded), decimals=0).argmax(axis=1)[0]]

        if prediction == 0:
            predictions["neutral"].append(t)
        elif prediction == 1:
            predictions["positive"].append(t)
        else:
            predictions["negative"].append(t)

    if filter == 0:
        return predictions["neutral"]
    elif filter == 1:
        return predictions["positive"]
    else:
        return predictions["negative"]


def categorical_classification(model, loaded_tokenizer, data, filter=1):
    return None


def prep_sentiment_model():
    model_sentiment = keras.models.load_model("./sentiment_classifier/final_sentiment_model")

    with open("./sentiment_classifier/tokenizers/tokenizer_new.pickle", "rb") as handle:
        sentiment_tokenizer = pickle.load(handle)

    return model_sentiment, sentiment_tokenizer


def prep_category_classification_model():
    model_category = keras.saving.load_model("./category_classifier/model")

    with open("./category_classifier/tokenizer/tokenizer.pickle", "rb") as handle:
        category_tokenizer = pickle.load(handle)

    return model_category, category_tokenizer
