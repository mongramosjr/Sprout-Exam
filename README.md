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
