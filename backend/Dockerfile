# Use the official Python image as the base image
FROM python:latest

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt to the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application source code to the container
COPY . .

# Expose the port used by the FastAPI application
EXPOSE 8000

# Command to run your FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
