## Microservices and Microfrontend Project

The current project is an example of how microservices and microfrontends can work together while being contained with Docker for easy-usage.

### Description

The project is a one page application for library management, where the user can add, update, delete and search for books and authors that are part of the library. As the project is just an exmple, there is no database connected to the backend.

### Architecture

The application is written in Nodejs and has a modular structure, with microservices for the backend and microfrontend. Details of this arhitecture can be seen in the C4 diagram from the repository as well.

There are 6 micro projects incapsulated in this application: 
- Backend Books (provides books API)
- Backend Authors (provides authors API)
- Backend Gateway (exposes both books and authors)

- Frontend Books
- Frontend Authors
- Frontend Gateway

  Each of these micro-applications runs on a different port and with the help of Docker they can be easily run altogether at once.

### Installation & Running

- clone repository
- in Backend run `docker build` and `docker up`
- in Frontend run `docker build` and `docker up`
- you can see the application running at `localhost:5004`

  

  
