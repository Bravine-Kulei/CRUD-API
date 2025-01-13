# CRUD-API Tutorial

# Node.js and Express Server Tutorial

This project demonstrates how to set up a basic server using Node.js and Express, with routes to handle HTTP GET and POST requests.

---

## Prerequisites

Before running this tutorial, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Getting Started

1. Clone this repository or copy the code to your local machine.

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
## Install required Dependencies
npm install express
npm install nodemon


Create a new file db.js if connecting to a database (not shown in this tutorial).

## Run Server

nodemon run dev

## Server Endpoints
  ## GET Request
    Route: /
    Description: Responds with a 200 OK status.
    Usage:  
    bash
    Copy code

## POST Request
Route: /

Description: Accepts a JSON body with name and location keys and responds with a message.

Usage:

## Code Explanation

## server. js 
 const express = require('express');
const pool = require('./db'); // Optional: Replace with your database configuration.

const port = 1337;

const app = express();
app.use(express.json()); // Middleware to parse JSON.

app.get('/', (req, res) => {
    res.sendStatus(200); // Responds with "OK" status.
});

app.post('/', (req, res) => {
    const { name, location } = req.body;
    res.status(200).send({
        message: `Your keys were: ${name}, ${location}`,
    });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
