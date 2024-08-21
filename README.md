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

## Project Structure


(NOTE: Front end components have been updated since 1.1)
 
**enmu-class-reviews/** <br/>
**├── backend/**    <br/> 
**│   ├── app/**      <br/>   
**│   │   ├── __init__.py**  &emsp;&emsp;      # Initializes the Flask application and its configurations. <br/>
**│   │   ├── models.py**    &emsp;&emsp;      # Contains the database models for the application.   <br/>
**│   │   ├── routes.py**  &emsp;&emsp;        # Defines the API routes for the application. <br/>
**│   │   ├── config.py** &emsp;&emsp;  # Contains configuration settings for the application. <br/>
**│   ├── migrations/** &emsp;&emsp; # Contains database migration files. <br/>
**│   ├── .env**  &emsp;&emsp; # Environment variables for the backend. <br/>
**│   ├── app.py**  &emsp;&emsp;   # The entry point for the Flask application. <br/>
**│   ├── requirements.txt**  &emsp;&emsp;       # Lists the Python dependencies for the backend. <br/>
**│   ├── wsgi.py**        &emsp;&emsp;    # WSGI entry point for deployment. <br/>

**├── frontend/** &emsp;&emsp; # enmu-class-reviews-frontend/<br/>
**│   ├── public/** &emsp;&emsp; # Contains the static assets for the application. <br/>
**│   │   ├── index.html**   &emsp;&emsp; # The main HTML file for the application. <br/>
**│   ├── src/** &emsp;&emsp; # Contains the source code for the application.  <br/>
**│   │   ├── components/** &emsp;&emsp; # Contains the React components for the application.  <br/>
**│   │   │   ├── SignUp.js** &emsp;&emsp;  # Component for user sign-up. <br/>
**│   │   │   ├── Login.js** &emsp;&emsp; # Component for user login. <br/>
**│   │   │   ├── Post.js** &emsp;&emsp; # Component for displaying individual posts. <br/>
**│   │   │   ├── Discussion.js**  &emsp;&emsp; # Component for displaying discussion threads.  <br/>
**│   │   │   ├── NavBar.js** &emsp;&emsp;   # Component for the navigation bar.  <br/>
**│   │   ├── pages/** &emsp;&emsp; # Contains the React components for different pages.  <br/>
**│   │   │   ├── Home.js**  &emsp;&emsp; # Home page component.   <br/>
**│   │   │   ├── About.js**  &emsp;&emsp;  # About page component. <br/>
**│   │   ├── services/** &emsp;&emsp; # Contains the service modules  for API calls. <br/>
**│   │   │   ├── authService.js** &emsp;&emsp;   # Service module for authentication-related API calls. <br/>
**│   │   ├── App.js**    &emsp;&emsp; # The main component that sets up the routing. <br/>
**│   │   ├── index.js**   &emsp;&emsp;    # The entry point for the React application. <br/>
**│   ├── package.json**  &emsp;&emsp;    # Contains the dependencies and scripts for the frontend. <br/>
**│   ├── package-lock.json**   &emsp;&emsp;   # Lockfile for ensuring consistent installations. <br/>
**│   ├── .env**            &emsp;&emsp;     # Environment variables for the frontend. <br/>


**public/:** &emsp;&emsp; Contains the static assets for the application. <br/>
**src/:** &emsp;&emsp; Contains the source code for the application. <br/>
**components/:** &emsp;&emsp;  Contains the React components for the application. <br/>
**pages/:** &emsp;&emsp; Contains the React components for different pages. <br/>
**services/:**  &emsp;&emsp; Contains the service modules for API calls. <br/>
**App.js:** &emsp;&emsp;  The main component that sets up the routing. <br/>
**index.js:** &emsp;&emsp; The entry point for the React application. <br/>

## Available Scripts
In the project directory, you can run:

**npm start:** &emsp; Runs the app in the development mode. <br/>
**npm build:** &emsp; Builds the app for production to the build folder. <br/>
**npm test:**  &emsp; Launches the test runner in the interactive watch mode. <br/>
**npm eject:** &emsp; Removes the single build dependency from your project. <br/> 
 Note: this is a one-way operation. Once you eject, you can’t go back!  <br/>

## Dependencies
This project uses the following dependencies:

**axios**: For making HTTP requests.  <br/>
**react**: The core React library.   <br/>
**react-dom**: Serves as the entry point to the DOM and server renderers for React.  <br/>
**react-router-dom**: Provides DOM bindings for React Router.
Contributing   <br/>
Contributions are welcome! Please feel free to submit a Pull Request.   <br/>

License
This project is licensed under the MIT License - see the LICENSE file for details.  <br/>
