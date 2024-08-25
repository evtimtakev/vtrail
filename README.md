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
- **Docker:** Used for consistent setup of the application

## Application Overview

This application consists of three microservices designed to work together:

1. **UI Service** - A web interface built with Angular for user interactions.
2. **Crawler Service** - A Node.js application that crawls and gathers data.
3. **AI Service** - A backend service using Python for processing and analyzing data.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Docker](https://www.docker.com/get-started)

### Installation

**Building and Running Services:**

   Each service has its own `build.sh` and `run.sh` scripts. Follow the instructions for each service:

   #### UI Service
   Navigate to the `ui` directory:
   ```bash
   cd web
   ```
   - Build the UI Docker image:
     ```bash
     ./build.sh
     ```
   - Run the UI service:
     ```bash
     ./run.sh
     ```

   #### Crawler Service
   Navigate to the `crawler` directory:
   ```bash
   cd ../crawler
   ```
   - Build the Crawler Docker image:
     ```bash
     ./build.sh
     ```
   - Run the Crawler service:
     ```bash
     ./run.sh
     ```

   #### AI Service
   Navigate to the `ai` directory:
   ```bash
   cd ../ai
   ```
   - Build the AI Docker image:
     ```bash
     ./build.sh
     ```
   - Run the AI service:
     ```bash
     ./run.sh
     ```

### Usage

- After starting the services, you can access the UI service on `http://localhost:4200` (port may vary).
- Ensure the Crawler and AI services are up and running to allow the UI to function properly.

### Stopping the Services

To stop the services, you can use the following command while in each service directory:
```bash
docker-compose down
```

### Troubleshooting

- If you encounter issues, check the logs by using:
  ```bash
  docker logs <container_name>
  ```
- Make sure Docker is running and that you have enough permissions to run Docker commands.

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
