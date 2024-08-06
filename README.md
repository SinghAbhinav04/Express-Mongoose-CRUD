# User Management API

This is a Node.js project that implements a User Management API using Express.js and MongoDB. The API supports CRUD operations for user data and logs all requests and responses.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete user data.
- **Request & Response Logging**: Logs details of every request and response.
- **MongoDB Integration**: Stores user data in a MongoDB database.
- **Express.js Middleware**: Custom middleware for logging and handling user routes.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or a connection string to a MongoDB Atlas cluster

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/user-management-api.git
   cd user-management-api
   
2. **Install dependencies**

npm install  

3. **Set up MongoDB**

Ensure MongoDB is running locally or modify the connection string in connection.js to point to your MongoDB instance.  

4. **Start the server**

npm start
The server will start on http://localhost:8000.



API Endpoints

*GET /api/users: Retrieve all users.  

*POST /api/users: Create a new user.  

*GET /api/users/: Retrieve a user by ID.  

*PATCH /api/users/: Update a user by ID.  

*DELETE /api/users/: Delete a user by ID.  



Middleware

logReqRes: Logs the IP address, HTTP method, and path of each request to log.txt.
