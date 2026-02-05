# Project Overview

This repository appears to contain multiple distinct project "aulas" (lessons or classes). The primary focus of this `GEMINI.md` file is on the `aula3-4/aula` sub-project, which is a modern frontend web application.

**`aula3-4/aula` Sub-Project:**

*   **Purpose:** This sub-project is a React application, likely designed for educational purposes or as a component demonstration, given its directory name "aula" and component structure.
*   **Technologies:**
    *   **Framework:** React (using `babel-plugin-react-compiler` for enhanced React development).
    *   **Language:** TypeScript (for type safety).
    *   **Build Tool:** Vite (specifically `rolldown-vite` version, indicating a custom or optimized Vite setup).
    *   **Styling:** Tailwind CSS (for utility-first CSS styling).
*   **Architecture:** The application follows a component-based architecture, with `Card` being a central component that composes other smaller components like `Button`, `CounterExercise`, `Title`, and `Description`.

# Building and Running

The `aula3-4/aula` sub-project uses `npm` (or `bun`) scripts defined in its `package.json` for common development tasks. To interact with this specific sub-project, navigate to the `aula3-4/aula` directory.

Assuming you are in the `aula3-4/aula` directory:

*   **Install Dependencies:**
    ```bash
    npm install
    # or
    bun install
    ```
*   **Development Server:**
    Runs the application in development mode with hot-reloading.
    ```bash
    npm run dev
    # or
    bun run dev
    ```
*   **Build for Production:**
    Compiles and bundles the application for production deployment.
    ```bash
    npm run build
    # or
    bun run build
    ```
*   **Lint Code:**
    Runs ESLint to check for code quality and style issues.
    ```bash
    npm run lint
    # or
    bun run lint
    ```
*   **Preview Production Build:**
    Serves the production build locally to test it before deployment.
    ```bash
    npm run preview
    # or
    bun run preview
    ```

# Development Conventions

*   **Component-Based Development:** The application is structured around reusable React components, as seen with `Card`, `Button`, `CounterExercise`, etc.
*   **TypeScript:** All application code is written in TypeScript, ensuring type safety and better maintainability.
*   **Tailwind CSS:** Styling is managed using Tailwind CSS utility classes directly within JSX, promoting rapid UI development and consistent design.
*   **Vite:** Vite is used as the build tool, configured with React and Tailwind CSS plugins.
*   **Linting:** ESLint is configured to enforce code style and identify potential issues, contributing to code quality.
*   **Babel React Compiler:** The `babel-plugin-react-compiler` is integrated, suggesting an emphasis on performance optimizations and potentially experimental React features.
