# Le Bon Troc

Le Bon Troc, the latest barter application allowing you to exchange your objects in complete security !
This application was designed to allow everyone to exchange objects and swap them for other objects.
In this way, we avoid waste, and we promote a local economy, with a real win-win ratio... Win-win!

## Table of Contents

- [Presentation](#presentation)
- [Features, incoming feature](#features-incoming-feature)
- [Technologies and versions](#technologies-and-versions)
- [How to run it](#how-to-run-it)
- [Rights](#rights)

## Presentation

We created the LeBonTroc application as part of our "Java" module at the EPF.
This project initially aims to create an application using certain technologies, such as SpringBoot and Angular.
We chose to apply this use case in a barter application, which we named LeBonTroc.
The reference will be appreciated by the reader.

Our LeBonTroc application therefore offers several features:
- The user has the possibility of creating an account, with their personal information.
  He can then log in using this information.
- The user can modify their account information.
- User can view a list of announcements.
- User can create ads themselves.
- The user can like each other's ads, as well as see which of these ads have been liked.
- Finally, the user can search for ads and objects.

All with an interactive and understandable Angular site, which allows as many people as possible to be guided.

## Incoming feature

At the moment filters work on the backend but not on the frontend. 
We plan to make them work in an upcoming update.

At this time, the user can interact with the site, but will not have access to other users's information.
We plan to set up a chat, as well as automatic email sending in the event of liking posts,
in order to allow users to exchange in the event of a match of two objects.

At this time, users have the option to be added as administrators, but their interface remains the same.
We plan to offer an administrator mode, allowing global management of announcements.
This administrator mode will have privileges, and will be able to manage the entire site.

## Technologies and versions

The technologies used are:

- Spring (framework)
- Hibernate (ORM)
- PostgreSQL (database)
- Flyway (database gestion)
- Angular (front-end)

Some dependency versions used :

- lombok.version : 1.18.20
- springdoc.version : 2.2.0
- flyway.version : 9.21.0

## How to run it

To begin, you will need to fill out the .env file in order to fill in the application's connection information.
You can copy the .env.sample file by hand, or enter the `cp .env.sample .env` command in the source file.

The database and the backend are launched in Docker containers, to launch them: `docker compose up -d`

Once this is done, the backend will be exposed on port 8080.

To launch the frontend, start by installing the dependencies with the npm install command in the source file.

Once done, use the commande `npm start` to run application.
The application will be exposed on port 4200, and accessible at the address http//localhost:4200.

## Rights

No rights (for now 😁)
