# Smart Task Manager Frontend

## Overview
This is the frontend for a simple task management application built with React and Vite, integrating with a backend API for task CRUD operations.

## Tech Stack
Frontend: React (with JSX and Vite)

## Features Implemented
- Core features: Create, view list, edit, delete tasks.
- Extra features: Filter by status, search by title/description, sort by created date (descending), responsive design using Bootstrap.

## Setup Instructions
1. Clone the repository or extract the ZIP.
2. Run `npm install` to install dependencies.
3. Update the `API_BASE` URL in `src/App.jsx` to match your backend's URL/port.
4. Run `npm run dev` to start the development server.
5. Access the app at http://localhost:5173 (default Vite port).

## Known Issues
- Ensure the backend is running and CORS is enabled.
- No authentication; tasks are not user-specific.