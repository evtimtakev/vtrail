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

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "-p", "5000"]