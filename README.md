# Front end Test

This project is a demonstration of a modern, best-practice React development setup. It uses TypeScript for safer, more maintainable code, Vite for a blazing-fast development experience and hot-reloading, and React Testing Library for writing tests that validate the app's functionality in a way that mirrors how users interact with it.

## Highlights

- **Awesome Basket Context**: Streamlined shopping basket management with a centralized state solution.
- **Modern Responsiveness Hook**: Effortless adaptation to different screen sizes and devices.
- **Unit Testing**: Ensuring code reliability and catching bugs early on.
- **All Components Handmade**: Custom-built components tailored to project requirements.
- **All CSS in JS**: Using JavaScript to style components for enhanced flexibility and maintainability.
- **Code Clean**: Emphasizing readability, maintainability, and adherence to best practices.
- **React Portal Popover**: Utilizing React Portals to create popovers that are rendered outside the DOM hierarchy of the parent component, allowing for flexible and dynamic placement within the application.
- **Menu and Restaurant Centralized State Management**: Centralizing the management of menu and restaurant data using a state management solution, enabling easy access and manipulation of data across different components, ensuring consistency and efficient data flow throughout the application.


## Getting Started

### Prerequisites

- Node.js 18.16 and npm 9.5.1 are required to run this project. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```
   git clone git@github.com:MGianetti/CareerFocus.git
   ```
2. Navigate to the project folder:
 ```
   cd CareerFocus
 ```
3. Install dependencies:
 ```
   npm install
 ```

## Running the Application

To start the development server, use the command:
 ```
npm run dev
 ```
The app will be served at `http://localhost:5173`.

## Building the Application

To create a production build of the application, use the command:
 ```
npm run build
 ```
The built static files will be in the `dist` directory.

## Testing the Application

Tests can be run with:
 ```
npm run test
 ```
 
 ## Known Issues

In order to showcase more complex techniques and functionalities, certain sacrifices were made regarding the modifiers logic and search functionality. Although these sacrifices were intentional to prioritize the demonstration of advanced features, it is important to be aware of the limitations they may present. 

1. **Modifiers Logic:**
   - Sacrifice: The modifiers logic might not be fully implemented or may exhibit inconsistencies in its behavior.
   - Note: The focus was placed on illustrating more intricate concepts and techniques rather than achieving a fully functional modifiers system. 

2. **Search Functionality:**
   - Sacrifice: The search functionality is non-existent in the project.
   - Impact: Users may experience difficulties in searching menu options.
   - Note: The decision was made to prioritize other aspects of the project, and as a result, the search functionality was not extensively developed.

It is important to keep in mind that the primary objective of the project was to showcase advanced techniques and demonstrate complex functionalities. While the modifiers logic and search functionality may not be fully realized, the project as a whole aims to highlight more sophisticated concepts that can be expanded upon in further development.


## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript that adds optional types.
- [Vite](https://vitejs.dev/) - A next-generation frontend tooling that significantly improves the frontend development experience.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - A lightweight solution for testing React components.

## Authors

- **Mateus Gianetti de Jesus**
