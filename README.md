# Sprout-Exam
Simple CRUD application using Vue 3 and FastAPI.

Make sure you have already installed docker on your computer.

# 1. Download the code
You can either clone the repository or download its compressed files to your computer.

# 2. Build the Docker Images
Extract the code if you downloaded that compressed file, and then from the root of your project directory, run:
### *docker-compose build*

# 3. Run the Docker Containers
Just run the following code
### *docker-compose up*

It will start the containers for both the Vue.js and the FastAPI. Due to the loosely coupled architecture of these two packages, the backend (FastAPI) will run on http://localhost:8000 and the frontend (Vue.js) will be accessible at http://localhost:8080.

# 4. Test the Login and CRUD of Employee Records.
For the backend (FastAPI), you use clients like curl and Postman to send requests to the http://localhost:8000/ endpoint. For creating an employee record, you have to include JSON data representing an employee and the token provided during successful login:

{
    "id": 1,
    "name": "John Doe"
}

The JSON data for login is:

{
    "username": admin,
    "password": "password"
}


Here are the endpoints of the API:

Login (POST method)

***http://localhost:8000/login***

List of employees (GET method)

***http://localhost:8000/api/employees***

Show the info of an employee (GET method)

***http://localhost:8000/api/employee/{id}***

Delete a particular record of an employee (DELETE method)

***http://localhost:8000/api/employee/{id}***

Update the info of an employee (PUT method)

***http://localhost:8000/api/employee/{id}***

Create a record of an employee (POST method)
***http://localhost:8000/api/employee***
