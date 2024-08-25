# Microservice for Movies

<p>
These microservices are designed to fulfill their function within a platform of cinemas, each one will be performed every time a call is made on the frotend through the URLs defined, these four microservices are mainly focused on managing the information of the movies that are shown in the cinema through their respective endpoints which are connected to a postgres database that is hosted in the cloud.
</p>


#### How to install and run the project? :wrench:
Each microservice has its own instructions but in general you will need to follow the following steps for installation and execution:

###### Clone the repository:

- `git clone <URL_OF_REPOSITORY>`
- `cd <URL_OF_REPOSITORY> `

###### Install dependencies:

- `npm install`

###### Configure environment variables:
Create an `.env` file in the root of the project and set the following environment variables:

- `DB_USER=your_postgresql_user`
- `DB_HOST=your_postgresql_host`
- `DB_DATABASE=your_postgresql_database`
- `DB_PASSWORD=your_postgresql_password`
- `DB_PORT=server_port`


###### Execute the server:
- `npm start`

#### How to use the project :computer:
<p>
To use the microservice, follow the steps above to install and run the project, in case of any additional steps each microservice has its own instructions. Once the program is running you can make use of the frontend of the cinema platform which should also run on your local machine or you can make use of the Swagger documentation available, so it would no longer be necessary to have the frontend of the cinema platform to test this microservice, you can access through the URL of your local machine by incrementing the path indicated in the documentation for each microservice.
</p>


`<link>` : <https://github.com>

#### Technologies used for this microservice
- **Node.js** with the Express.js framework for the backend server.
- **PostgreSQL** for the database.
- **Swagger** for API documentation.
- **Docker** for optional containerization.


###  License 
This project is licensed under the (AFL-3.0) License - see the [LICENSE](https://opensource.org/license/afl-3-0-php) file for details.
