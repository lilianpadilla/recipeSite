# My Recipe Website
Homework assignment for Trinity University's Software Engineering Course.

## Overview
Features a short description of foods I like, short recipe descriptions, and an option to add a recipe to the site.


## Installation & Setup
1. Clone the repository: 
   ```
   git clone https://github.com/lilianpadilla/recipeSite.git  
   cd recipeSite
   ```
2. Install dependencies, my sql, and dotenv:
   ```
   npm install
   npm install mysql2
   npm install dotenv
   ```
3. Using MySQL Workbench, set up local DB by running the dump file in the database folder
 - You will need to create your own .env file in the root directory, so
   add this template to .env with your DB credentials
    ```
    DB_HOST=yourhost
    DB_USER=youruser
    DB_PASSWORD=yourpassword
    DB_NAME=recipe
    ```

4. To start the app, run
    ``` 
    npm start
     ```
5. Go to localhost:3000 on your browser to view the site


