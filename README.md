# PeopleTrack

**PeopleTrack** is an application designed to register, list, and update information about individuals, including their name, address, and phone number. The app is built with Node.js, using EJS for views and MySQL as the database.

## Live Demo

You can visit the live version of the app here:

- **Railway**: [PeopleTrack](https://javascript-crud-clientes-production.up.railway.app/)

## Features

- **Register Individuals**: Add new entries for each person's name, address, and phone number.
- **List Records**: View a list of all registered individuals.
- **Update Information**: Edit and update existing records.

## Technologies Used

- **Node.js**: Backend and application logic.
- **EJS (Embedded JavaScript)**: Dynamic view rendering.
- **MySQL**: Database for storing individuals' information.
- **Express.js**: Framework for managing routes and middleware in Node.js.
- **Bootstrap (bootswatch)**: CSS framework for fast and efficient styling.
- **Docker**: Containerization for local development.

### Hosting database (free)

[Clever Cloud](https://console.clever-cloud.com/)

## 🐳 Running with Docker

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Setup

1. Clone the repository
  ```bash
   git clone https://github.com/cachaucanes/Javascript-Crud-Clientes
   cd Javascript-Crud-Clientes
  ```

2. Create your environment file
```bash
   cp .env.example .env
```

3. Start the application
```bash
   docker compose up --build
```

4. Open your browser at `http://localhost:8080`

### Useful commands

| Command | Description |
| --- | --- |
| `docker compose up --build` | Build and start all services |
| `docker compose up -d` | Start in background |
| `docker compose down` | Stop all services |
| `docker compose down -v` | Stop and remove database volume |
| `docker compose logs -f app` | Follow app logs |

![PeopleTrack](https://github.com/user-attachments/assets/5240b7a8-c7fd-4686-b1d1-c3568c64145a)