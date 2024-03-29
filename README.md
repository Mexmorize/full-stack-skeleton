# Purpose
To build a complete full-stack application template to be used in various projects

# Next TODO
Connect the GraphQL backend with country data to the TSX front-end

# Getting Started:
## Setting up using Docker and checking that containers are running
Note: Below steps may take some time

    docker-compose up -d

    docker ps

    Django server url: http://127.0.0.1:8000/graphql/  <br />
    React frontend url: http://localhost:3000/


## Setting up Python environment
To get this project up and running you should start by having Python installed on your computer. It's advised you create a virtual environment to store your projects dependencies separately. You can install virtualenv with <br />

```
pip install virtualenv
```

Clone or download this repository and open it in your editor of choice. In a terminal (mac/linux) or windows terminal, run the following command in the base directory of this project

```
python -m venv venv
```

That will create a new folder `venv` in your project directory. Next activate it with this command on mac/linux:

```
source venv/bin/activate
```

### Setup Database and User in PostgreSQL

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "postgres,
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "db"
    }
}
```
