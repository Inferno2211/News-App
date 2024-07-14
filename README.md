# News App

This is a modern, sleek news application built using React and the NewsAPI. It allows users to sort, filter, and query news articles across various categories such as Politics, Business, Technology, Arts, Science, Health, and Sports.

Created for Cantilever Web Development Internship

## Features

- Sort news articles by categories
- Filter news articles by keywords
- Responsive design with a dark theme and glowing neon elements
- Animated logo with pastel colors

## Screenshot

![News App](./screenshot.png)

## Getting Started

Follow these instructions to clone the project and run it locally on your machine.

### Prerequisites

- Node.js
- npm (or yarn)

### Installing

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/news-app.git
   cd news-app
   ```

2. **Install the dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3. **Get your API key from NewsAPI:**
    
    Visit [NewsAPI](https://newsapi.org) and sign up to get your API key.  <


4. **Create a .env file in the root of the project and add your API key:**
    ```env
    REACT_APP_NEWS_API_KEY=your_news_api_key_here
    ```

### Running the app
1. **To run the app locally, use:**

   ```bash
    npm start
    # or
    yarn start
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
    This will start the development server and you can view the application in your browser at http://localhost:3000.

## Usage

1. Use the category buttons to sort news articles by category.
2. Use the search bar to filter news articles by keywords.
3. Click on a news card to read the full article.

## Built with
- [React](https://reactjs.org/) - The web framework used
- [NewsAPI](https://newsapi.org) - The API used to fetch news articles