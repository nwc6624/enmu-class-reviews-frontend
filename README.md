# ENMU Class Reviews Frontend

This is the frontend for the ENMU Class Reviews application. It allows users to sign up, log in, create posts, view all posts, view discussions, and participate in discussions about classes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/enmu-class-reviews-frontend.git
   cd enmu-class-reviews-frontend
Install the dependencies:
bash
Copy code
npm install
Usage
To run the application locally, use the following command:

bash
Copy code
npm start
This will start the development server and open the application in your default web browser. The app will reload if you make edits.


## enmu-class-reviews-frontend/
## │
## ├── public/                  # Contains the static assets for the application.
## ├── src/                     # Contains the source code for the application.
## │    ├── components/          # Contains the React components for the application.
## │   │   ├── SignUp.js
│   │   ├── Login.js
│   │   ├── Post.js
│   │   ├── Discussion.js
│   │   ├── NavBar.js
│   ├── pages/               # Contains the React components for different pages.
│   │   ├── Home.js
│   │   ├── About.js
│   ├── services/            # Contains the service modules for API calls.
│   │   ├── authService.js
│   ├── App.js               # The main component that sets up the routing.
│   └── index.js             # The entry point for the React application.
└── package.json

public/: Contains the static assets for the application.
src/: Contains the source code for the application.
components/: Contains the React components for the application.
pages/: Contains the React components for different pages.
services/: Contains the service modules for API calls.
App.js: The main component that sets up the routing.
index.js: The entry point for the React application.
Available Scripts
In the project directory, you can run:

npm start: Runs the app in the development mode.
npm build: Builds the app for production to the build folder.
npm test: Launches the test runner in the interactive watch mode.
npm eject: Removes the single build dependency from your project. Note: this is a one-way operation. Once you eject, you can’t go back!
Dependencies
This project uses the following dependencies:

axios: For making HTTP requests.
react: The core React library.
react-dom: Serves as the entry point to the DOM and server renderers for React.
react-router-dom: Provides DOM bindings for React Router.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
