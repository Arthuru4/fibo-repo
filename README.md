##To start with docker:
_Note - docker configuration in project uses npm package manager. If you uses yarn package manager - re-config docker files, or use starter yarn pm (explaining below)_
####For start this project used docker-compose, link to install:
https://docs.docker.com/compose/install/

Go to _/infrastructure_ folder from root of project by
`cd infrastructure`

_Note - localhost:[3000, 3002, 3006] - those ports should be free to start containers_

Then start docker containers type from _infrastructure_ folder:

`docker-compose build`

Wait to finish build, then to up containers:

`docker-compose up -d`

And wait until done all four of them. To check status of containers:

`docker-compose ps`

3 of them should be with status "UP", and container _test_ - exited with status 0 - passed

###That's all, after all containers up - just go to http://localhost:3000 in your browser and use application

# IF you use yarn package manager, to start app:

Go to _infrastructure_ folder, open "docker-compose.yml", and comment(_Ctrl+/_ in Jetbrains) all below _- 3306:3306_ string (server, client and test services)
Go to _fibo-back/db.js_ file, comment `host: 'mysql',` string under TODO.

###To start MYSQL DataBase container:
###From root project folder in terminal type:
`cd infrastructure && docker-compose up -d`
###To start front:
###From root project folder in terminal type:
`cd fibo-front && yarn && yarn start`
###To start back:
###From root project folder in terminal type:
`cd fibo-back && yarn && yarn start`
