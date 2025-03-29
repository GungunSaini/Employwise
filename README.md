# Employwise - User Management App

This is a simple **React.js** application that fetches and displays a list of users from the [Reqres API](https://reqres.in/api/users). The app allows users to:

- View a paginated list of users
- Edit a user’s name
- Delete a user from the list
- Navigate between pages

## Features

- **React.js** for UI
- **Axios** for API requests
- **State Management** using `useState` and `useEffect`
- **Pagination** for navigating between pages
- **Edit & Delete** functionality for users
- **CSS Stylesheets** for styling

## Installation & Setup

### Clone the repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME


### Install dependencies

npm install


### Run the application

npm run dev

The app will run on `http://localhost:5173/` (Vite default port).

## API Details

This project uses the **Reqres API** to fetch user data.

- **Endpoint:** `https://reqres.in/api/users?page=1`
- **Login Credentials:**
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }


## Folder Structure


employwise/
│── src/
│   │── components/
│   │   ├── List.jsx  # User list component
│   │   ├── Login.jsx # Login component
│   │   ├── List.css  # Styles for List component
│   │   ├── Login.css # Styles for Login component
│   │── App.jsx       # Main app file
│   │── main.jsx      # React entry point
│── public/
│── package.json     # Dependencies
│── README.md        # Documentation


## Usage

1. Open the app in your browser (`http://localhost:5173/`).
2. View the list of users fetched from the API.
3. Click **Edit** to modify a user’s name and save changes.
4. Click **Delete** to remove a user from the list.
5. Use **Previous** and **Next** buttons for pagination.

## Deployment

I deployed this project using **Vercel**:


## Contributing

Feel free to fork this repository and contribute by submitting a pull request.

## Note on Responsiveness

Currently, some work is pending on improving the responsiveness of the application. I am actively working on ensuring a seamless experience across different screen sizes. 



