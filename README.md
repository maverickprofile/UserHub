# User Hub 

A simple web application built using Node.js, Express.js, MySQL, and EJS templates. This app provides basic CRUD functionality with a MySQL database and dynamic HTML rendering using EJS.

## Features

- **Home Page**: Displays the total number of users in the database.
- **User Listing Page**: Displays a list of all users in the database.
- **User Edit Page**: Allows editing a user's username after verifying their password.

## Tech Stack

- **Node.js**: JavaScript runtime environment for building scalable applications.
- **Express.js**: Web framework for handling routes and building APIs.
- **MySQL**: Relational database used to store user data.
- **EJS**: Template engine for rendering dynamic HTML views.
- **Faker.js**: Generates random user data for testing purposes.
- **Method-Override**: Allows handling HTTP methods such as `PATCH` for updating data.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/maverickprofile/user-hub.git
cd delta-app
```
### 2. Install dependencies2. Clone the repository
```bash
npm install
```
### 3. Set up MySQL database
- Create a database called `delta_app` in MySQL.
- Make sure your database is running and accessible.
- Update your MySQL credentials in the `index.js` file or set environment variables for `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME`.

### 4. Run the application
```bash
node index.js
```
By default, the app will run on port `8080`. You can change the port by modifying the `app.listen()` in `index.js`.

### 5. Visit the app in your browser
Open your browser and visit:
```bash
http://localhost:8080
```
### Routes

- `GET /`: Home page that displays the total number of users in the database.
- `GET /user`: Shows a list of all users in the database.
- `GET /user/:id/edit`: Edit a user's details by their ID.
- `PATCH /user/:id`: Updates a user's username after verifying their password.

