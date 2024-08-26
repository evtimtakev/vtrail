FROM python:3.10-slim-buster

# Install necessary system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        libblas3 \
        liblapack3 \
        libopenblas-dev \
        liblapack-dev \
        libatlas-base-dev \
        gfortran \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /.

COPY . .
COPY ./sentiment_classifier /sentiment_classifier

# TODO move these in to reqierments txt
RUN pip install -U Flask

RUN pip install transformers

RUN pip install scipy

RUN pip3 install torch torchvision

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "-p", "5000", "--debug"]
