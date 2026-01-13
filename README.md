# React Blog Platform (Learning Project)

This project is a hands-on learning application built to demonstrate modern React development practices. It is a simple blog platform that allows users to create, read, update, and delete posts, built with a production-level technology stack.

## Features

*   **Full CRUD Operations:** Create, Read, Update, and Delete blog posts.
*   **Server State Management:** Uses TanStack Query to efficiently fetch, cache, and update data from a mock API, complete with proper loading and error states.
*   **Client State Management:** Uses Zustand for managing global UI state, such as the visibility of a sidebar.
*   **Persistent UI State:** User's UI preferences (e.g., sidebar state) are saved to `localStorage` and persist across page reloads.
*   **Routing:** A complete multi-page experience with routing handled by React Router DOM.
*   **Styled with Tailwind CSS:** Utilizes the utility-first Tailwind CSS framework for styling, along with shadcn/ui for some base components.

## Tech Stack

*   **Framework:** [React](https://react.dev/) with [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Server State:** [TanStack Query](https://tanstack.com/query/latest)
*   **Client State:** [Zustand](https://zustand-demo.pmnd.rs/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
*   **Mock API:** [json-server](https://github.com/typicode/json-server)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm

### Setup

1.  **Clone the repository** (or download the source code):
    ```sh
    git clone <your-repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    This will install all the necessary packages for both the application and development.
    ```sh
    npm install
    ```

3.  **Run the Mock API Server:**
    This project uses `json-server` to simulate a backend API. Open a **new terminal window** and run the following command. This server must be running for the application to fetch and save data.
    ```sh
    npx json-server db.json --watch --port 5000
    ```

4.  **Run the Development Server:**
    In your original terminal, run the Vite development server.
    ```sh
    npm run dev
    ```
    Your application should now be running at `http://localhost:5173` (or the next available port).

## Project Structure

The `src` directory is organized by feature and function to promote scalability and maintainability.

```
src/
├── components/   # Shared, reusable UI components
├── pages/        # Page components, mapped to routes
├── services/     # Functions for interacting with external APIs (e.g., postService.ts)
├── stores/       # Global client-side state stores (Zustand)
├── types/        # TypeScript type definitions (e.g., Post interface)
├── App.tsx       # Main application component with routing
└── main.tsx      # Application entry point
```

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm run lint`: Lints the code using ESLint.
*   `npm run preview`: Serves the production build locally.