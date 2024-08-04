# VTrail

VTrail is a web API that scrapes social media platforms including Twitter, Reddit, and Stack Overflow for posts. It classifies these posts by sentiment and category using an in-house machine learning model. The application consists of APIs written in Node.js and Python, as well as a user interface built with Angular.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

VTrail is a versatile tool designed to scrape social media posts from platforms like Twitter, Reddit, and Stack Overflow. It employs machine learning techniques to classify these posts based on sentiment and category, providing valuable insights for various applications.

## Features

- Scrape posts from Twitter, Reddit, and Stack Overflow.
- Classifies posts by sentiment (positive, negative, neutral).
- Categorize posts into predefined categories.
- User-friendly web interface built with Angular.
- APIs for seamless integration with other applications.

## Technologies

- **Node.js:** Backend API for handling requests and responses.
- **Python:** Backend API for machine learning classification.
- **Flask:** Web framework for building Python APIs.
- **Angular:** Frontend framework for building the user interface.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- Python
- Flask
- Angular CLI

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/evtimtakev/HermesV2.git
    ```

2. Navigate to the project directory:

    ```bash
    cd HermesV2
    ```

3. Install Python dependencies:

    ```bash
    cd Ai
    ```

    ```bash
   python -m venv ai
    source ai/bin/activate
    ```
   
    ```bash
    pip install -r requirements.txt
    ```

4. Install Node.js dependencies:
    ```bash
    cd Crawler
    ```

    ```bash
    cd api
    ```

    ```bash
    npm install
    ```

    ```bash
      cd ..
    ```
   ```bash
      cd social-media-crawler
    ```

    ```bash
      npm install
    ```

5. Install dependencies for Angular UI:


## Usage

To start the application, follow these steps:

1. Start Node.js API:

```cd Crawler/social-media-crawler && npm run build cd Crawler/api && npm start```


2. Start Python API (Flask):

```source venv/bin/activate && flask run```


3. Start Angular UI:
```cd UI && npm run start```


Visit `http://localhost:4200` in your web browser to access the user interface.

## API Endpoints

- **POST /v1/crawler/collect:** Get Stack Overflow, Twitter and Reddit posts.
- **POST /predict:** Classify posts by sentiment and category.

For detailed API documentation, refer to the respective API files.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project is base on the open source API Hermesv2 - https://github.com/evtimtakev/HermesV2
