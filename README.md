# Worktable List of Countries Project

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
    cd wt-project
    ```

2. **Backend Setup:**

    ```bash
    cd server
    npm install
    ```

3. **Frontend Setup:**

    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1. **Backend:**

    - Create a `.env` file in the `server` directory with the following content, for information about the Weather API, go to [Weather API Website](https://www.weatherapi.com/):

      ```plaintext
      PORT=5271
      WEATHER_API_KEY=your_weatherapi_key
      WEATHER_API_URL=http://api.weatherapi.com/v1/current.json
      FRONTEND_URL=http://localhost:3000
      BACKEND_URL=http://localhost
      ```

    - Start the backend server:

      ```bash
      npm run start
      ```

2. **Frontend:**

    - Start the frontend development server:

      ```bash
      npm start
      ```

3. **Access the Application:**

    - Open your web browser and navigate to `http://localhost:3000`.

## More Information

For more information, see the README file for each project.