# Nitza Development Landing Page

Welcome to the **Nitza Development** landing page repository! This project is a modern and responsive web application built using [Vue 3](https://vuejs.org/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/). We use [Tailwind CSS](https://tailwindcss.com/) for styling and [pnpm](https://pnpm.io/) for efficient package management.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Built with [Vue 3 Composition API](https://vuejs.org/guide/introduction.html#composition-api).
- Written in [TypeScript](https://www.typescriptlang.org/) for type safety and enhanced development experience.
- Styled with [Tailwind CSS](https://tailwindcss.com/) for quick and customizable design.
- Lightning-fast development and build process using [Vite](https://vitejs.dev/).
- Uses [pnpm](https://pnpm.io/) for efficient dependency management.
- Mobile-first, responsive design.

---

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nitza-development.git
   cd nitza-development
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

---

## Scripts

Here are the available scripts for development and production:

- **Start Development Server:**
  ```bash
  pnpm dev
  ```

- **Build for Production:**
  ```bash
  pnpm build
  ```

- **Preview Production Build:**
  ```bash
  pnpm preview
  ```

- **Lint Code:**
  ```bash
  pnpm lint
  ```

---

## Directory Structure

```
.
├── src
│   ├── assets       # Static assets (images, icons, etc.)
│   ├── components   # Reusable Vue components
│   ├── pages        # Application pages
│   ├── router       # Vue Router configuration
│   ├── store        # Pinia store configuration (optional)
│   ├── styles       # Tailwind CSS custom styles
│   ├── App.vue      # Root Vue component
│   └── main.ts      # Application entry point
├── public           # Public assets served directly
├── vite.config.ts   # Vite configuration
└── package.json     # Project metadata and scripts
```

---

## Technologies Used

- [Vue 3](https://vuejs.org/): The progressive JavaScript framework for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript for large-scale applications.
- [Vite](https://vitejs.dev/): A next-generation frontend tool for fast builds.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [pnpm](https://pnpm.io/): A fast, disk space-efficient package manager.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## License

This project is licensed under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

