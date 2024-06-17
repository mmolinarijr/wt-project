# Weather App

## Overview

This is a web application that allows users to fetch weather data for a specified country/city. It's part of the project for the Worktable hiring test application for the full stack developer position. It's built with React.js and Typescript, Vite is used as the configuration tool.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features

- Show a list of all the world's countries and some of their information.
- Display current temperature for the country's capital.

## Technologies Used

- TypeScript
- React
- Vite

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v20 or higher)
- npm (v10 or higher)
- A web browser

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mmolinarijr/wt-project.git
    cd wt-project/client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

1. **Create a `.env` file in the `client` directory with the following content:**

    ```plaintext
    VITE_WEATHER_API_URL='http://localhost:5271/api/weather'
    ```

2. **Start the frontend development server:**

    ```bash
    npm run dev
    ```

3. **Access the Application:**

    - Open your web browser, login to the Worktable monday.com board and navigate to the tab "DEVELOP HERE"

## Project Structure

```plaintext
App
├── server
│   ├── src
│   │   ├── controllers
│   │   │   └── weatherController.ts
│   │   ├── routes
│   │   │   └── weatherRoutes.ts
│   │   ├── app.ts
│   │   ├── swagger.ts
│   │   ├── swaggerDef.ts
│   │   ├── types.ts
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── .dockerignore
│   ├── .gitignore
│   ├── README.md
├── client
│   ├── src
│   │   ├── api
│   │   │   └── mondaySdk.ts
│   │   │   └── WeatherApi.ts
│   │   ├── components
│   │   │   ├── DataTable
│   │   │   │   └── DataTable.tsx
│   │   │   │   └── DataTable.css
│   │   │   ├── ModalView
│   │   │   │   └── ModalView.tsx
│   │   │   │   └── ModalView.css
│   │   │   ├── SearchBar
│   │   │   │   └── SearchBar.tsx
│   │   │   │   └── SearchBar.css
│   │   ├── typing
│   │   │   └── DataTableType.tsx
│   │   │   └── modalViewType.tsx
│   │   │   └── mondaySdkType.tsx
│   │   │   └── searchBarType.tsx
│   │   ├── utils
│   │   │   └── regionColor.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── vite-env.d.ts
│   ├── .env
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
```

## Contact

Developer contact: contact at mauriciomolinari dot com 
