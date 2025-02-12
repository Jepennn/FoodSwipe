# FoodSwipe (Under development)

FoodSwipe is a web application that allows users to browse and like recipes. The application is reminds of tinder but for recipes. The applicationn is built using React, CSS Modules, Redux for state management, and Supabase for the backend. Additionally, it integrates with the Tasty API to fetch recipe data.

## Features

- User authentication and authorization
- Browse and like recipes
- View detailed information about recipes and se video of how to cook it
- Responsive design

## Technologies Used

- **React**
- **CSS Modules**
- **Redux**
- **Supabase**
- **Tasty API**

## Test the Application

You can test the application by visiting [FoodSwipe](https://recipe-tinder-nqmvjusn0-jespers-projects-d7ce381a.vercel.app/).

## Project Structure

The project is built with MVP - model, view, presenter architecture.

- `src/`: Contains the source code for the application.
  - `App.jsx`: The main application component.
  - `main.jsx`: The entry point of the application.
  - `Redux/`: Contains Redux slices and thunks for state management.
  - `Presenter/`: Contains presenter components that connect views to the Redux store.
  - `View/`: Contains view components that define the UI.
  - `Utilities/`: Contains utility functions and components.
  - `supabaseConfig.js`: Configuration file for Supabase.
  - `supabaseDb.js`: Functions for interacting with the Supabase database.
  - `veganAPI.js`: Function for fetching data from the Tasty API.
