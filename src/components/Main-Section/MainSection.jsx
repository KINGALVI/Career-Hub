// 📦 Importing the Outlet component from React Router
// Outlet is used to render child routes inside this layout
import { Outlet } from "react-router-dom";

// 🧭 Header and Footer components wrap every page
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// 🏛️ Main layout component for page structure
// This acts as the shell for all routed pages and common UI sections
const Main = () => {

  return (
    <>
      {/* 🏠 Persistent top navigation bar */}
      <Header />

      {/* 🔄 Dynamic rendering area for matched child routes */}
      <Outlet />

      {/* 📨 Persistent footer across all routes */}
      <Footer />
    </>
  );
};

// 📤 Exporting the Main layout component for use in route configuration
export default Main;