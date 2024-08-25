# Microservice for Delete Movies

<p>
This microservice performs the action of removing movies from a cinema platform. It has an interface where it makes the call to this microservice through a defined URL. The microservice performs this action using a query language and standard called GraphQL, which takes the ID of the chosen movie and deletes it from a postgres database that is hosted in the cloud.
</p>


#### How to install and run the project? :wrench:
The project requires Node.js and npm installed on your system. To install and run the project, follow these steps:

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
To make use of this microservice you must execute the above mentioned commands locally on your machine, you can make use of the frontend that was designed for the consumption of this microservice, where you should modify the URL to work locally without problem.
</p>


`<link>` : <https://github.com>

#### Technologies used for this microservice
- **Node.js** with the Express.js framework for the backend server.
- **PostgreSQL** for the database.
- **Docker** for optional containerization.


###  License
This project is licensed under the (AFL-3.0) License - see the [LICENSE](https://opensource.org/license/afl-3-0-php) file for details.
