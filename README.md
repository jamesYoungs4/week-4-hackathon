# week-4-hackathon - Bridget Jones’ Diary 

## Overview

- It is a simple personal diary application that allows users to create, view, update, delete, and search diary entries.
- Front end is built with **HTML** and **CSS**, and communicates with a seperate **Express backend API** which is connected to a **database**.

## Getting Started

### Prerequisites

- Node.js
- NPM
- A cloud-based database hosting platform, such as Supabase 
  
### Installation

1. Clone the repository

    - Run `git clone <url>` in the CLI of your choice

2. Navigate to the project directory

    - Navigate to the project with `cd <project_name>`

3. Install dependencies

    - Run `npm install` to install all dependencies for the project

4. Setup your database

    - Create a database instance on [Supabase](https://supabase.com/) (or other cloud-based database hosting platforms)
    - Retrieve the database URL & copy it
    - Create a `.env` file in the root directory with the following:
    
      ```
      DB_URL=<your_database_url>
      ```
      
    - Replace `<your_database_url>` with the database URL you just copied
    - Run `npm run setup-db` to setup the database

5. Setup your port
  
    - Add A `PORT` key assigned to the port of your choice in your `.env` file
    
        ```
        PORT=<port-of-your-choice>
        ```

6. Run the server

    - Run `npm run dev` to run the server in development mode
    - Run `npm start` to run the server in production mode

### Database Schema

```
entry_id: int (Primary Key)
date: int, not null 
category: string, not null 
text: string, not null 
```

## API Endpoints

All available API endpoints with their methods and descriptions.

|CRUD	|MVC name	|Backend	|Frontend page|
|--------|-------------|--------------|------------------------------|
|Read	|Index	|GET /api/entries	|index.html|
|Read	|Show	|GET /api/entries/:id	|entry.html|
|Create	|Create	|POST /api/entries	|new.html|
|Update	|Update	|PATCH /api/entries/:id	|edit.html|
|Delete	|Destroy	|DELETE /api/entries/:id	|entry.html|

