Haunted-City Website

Welcome to the Haunted-City website! This README provides a comprehensive overview of the project, instructions for setting it up, and guidelines for contributing.
Table of Contents

    Introduction
    Technologies Used
    Installation
    Usage
    Project Structure
    Contributing
    Contact

Introduction

Haunted-City is a website designed to showcase the information and history of Haunted City Roller Derby. The site is built using Node.js, Express, and EJS (Embedded JavaScript), providing a robust and dynamic user experience.

Technologies Used

    Node.js: A JavaScript runtime environment for building scalable server-side applications.
    Express.js: A web application framework for Node.js, used to build the backend and handle routing.
    EJS (Embedded JavaScript): A templating engine for generating HTML markup with JavaScript.
    CSS/Bootstrap: For styling and responsive design.

Installation
Prerequisites

Before you begin, ensure you have the following installed on your machine:

    Node.js (version 14.x or later)
    npm (Node Package Manager)

Steps

    Clone the Repository:

    bash

git clone https://github.com/yourusername/haunted-city.git
cd haunted-city

Install Dependencies:

bash

npm install


Start the Application:

bash

    npm start OR node ./index.js

    The website will be running on http://localhost:3000.

Usage

Once the server is up and running, you can explore the website by navigating to http://localhost:3000 in your web browser. Use the site to see the latests scrims and photos, information on how to join, and a history of the league.

Project Structure

The project structure is organized as follows:

HauntedCity/
├── public/
│   └──photos/
├── views/
│   ├── partials/
│   └── index.ejs
├── index.js
├── package.json
└── README.md

    public/: Contains static files like CSS, JavaScript, and images.
    views/: Contains EJS templates for rendering HTML pages.
    index.js: The main entry point for the application.
    package.json: Project metadata and dependencies.

Contributing

We welcome contributions to the Haunted-City project! To contribute:

    Fork the repository.
    Create a new branch for your feature/bugfix.
    Make your changes and commit them.
    Push to your fork and submit a pull request.

Thank you for visiting Haunted-City!