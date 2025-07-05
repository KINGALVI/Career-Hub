// Importing global styles for the entire application
import './App.css';

// Importing the main router configuration that controls app navigation
import React_Router from './Router/React_Router';

// Main App component that acts as the root of your application
function App() {

  return (
    <>
      {/* Render the RouterProvider and nested routes defined in React_Router */}
      <React_Router />
    </>
  );
}

// Exporting the App component so it can be used in main.jsx or index.jsx
export default App;