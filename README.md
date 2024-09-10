# Student-Management-System

## Introduction
The Student Management System is a web application built using Spring Boot, Spring MVC, and MongoDB. It provides basic functionalities for managing student records, including creating, retrieving, updating, and deleting student information. This README file serves as a guide to understanding the project structure, technologies used, features implemented, and instructions for running the application.

## Technologies
- **Spring Boot**: A powerful framework for building Java applications with minimal configuration.
- **Spring MVC (Model-View-Controller)**: An architectural pattern used for developing web applications in Java.
- **MongoDB**: A NoSQL database used for storing and managing student data.

## Features
1. **Create**: Add new student records to the database.
2. **Retrieve**: Fetch student information from the database based on various criteria.
3. **Update**: Modify existing student records with updated information.
4. **Delete**: Remove student records from the database.

## Architecture
The architecture of the Student Management System follows a layered approach:
- **Presentation Layer**: Implemented using Spring MVC, responsible for handling user requests and rendering views.
- **Service Layer**: Contains business logic and interacts with the MongoDB database.
- **Data Access Layer**: Uses MongoDB repositories to perform CRUD operations on student entities.
  
## Spring Boot Mvc Working Flow
![image](https://github.com/sandesh300/Student-Management-System/assets/92014891/67798748-8540-4047-945a-abb6d390bcb6)

## Modules
- **Authentication Module**: Handles user authentication and authorization.
- **Student Management Module**: Manages student records, including CRUD operations, search functionality, and reporting.
- **Database Connectivity Module** : Establishes connections with MongoDB and handles data access operations.
  
## Crud function how to perform the RESTful Web Service let discuss with following annotations.
- **@PostMapping**:  annotation which used to create new record.
- **@GetMapping**:   annotation which used to reads a record.
- **@RequestMapping**: annotation which used to search the record.
- **@PutMapping**:   annotation which used to update the existing record.
- **@DeleteMapping**:  annotation which used to delete the record.


## Running the Application
1. Clone the repository from GitHub.
2. Install MongoDB and configure the database connection in the application properties file.
3. Build the project using Maven: `mvn clean install`.
4. Run the Spring Boot application: `mvn spring-boot:run`.
5. Access the application through the web browser using the provided URL.

---

This README provides an overview of the Student Management System, including its features, architecture, and instructions for running the application. For detailed implementation and code documentation, refer to the project repository and codebase.


