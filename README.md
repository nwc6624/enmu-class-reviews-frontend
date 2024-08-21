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
 
enmu-class-reviews/ <br/>
├── backend/        <br/> 
│   ├── app/        <br/>
│   │   ├── __init__.py          # Initializes the Flask <br/>   application and its configurations. <br\>
│   │   ├── models.py            # Contains the database models for the application.   <br/>
│   │   ├── routes.py            # Defines the API routes for the application. <br/>
│   │   ├── config.py            # Contains configuration settings for the application. <br/>
│   ├── migrations/              # Contains database migration files. <br/>
│   ├── .env                     # Environment variables for the backend. <br/>
│   ├── app.py                   # The entry point for the Flask application. <br/>
│   ├── requirements.txt         # Lists the Python dependencies for the backend. <br/>
│   ├── wsgi.py                  # WSGI entry point for deployment. <br/>
├── frontend/                     # enmu-class-reviews-frontend/<br/>
│   ├── public/                  # Contains the static assets for the application. <br/>
│   │   ├── index.html           # The main HTML file for the application. <br/>
│   ├── src/                     # Contains the source code for the application.  <br/>
│   │   ├── components/          # Contains the React components for the application.  <br/>
│   │   │   ├── SignUp.js        # Component for user sign-up. <br/>
│   │   │   ├── Login.js         # Component for user login. <br/>
│   │   │   ├── Post.js          # Component for displaying individual posts. <br/>
│   │   │   ├── Discussion.js    # Component for displaying discussion threads.  <br/>
│   │   │   ├── NavBar.js        # Component for the navigation bar.  <br/>
│   │   ├── pages/               # Contains the React components for different pages.  <br/>
