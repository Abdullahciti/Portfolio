import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrPage from "./routes/ErrPage.jsx";
import App from "./App.jsx";
import AboutMe from "./components/home/rightside/AboutMe.jsx";
import Projects from "./components/home/rightside/Projects.jsx";
import Contact from "./components/home/rightside/Contact.jsx";
import Resume from "./components/home/rightside/Resume.jsx";

// Locales
import i18n from "i18next";
import "./i18n";
import { LanguageProvider } from "./context/LanguageContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrPage />,
    children: [
      { index: true, element: <AboutMe /> },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </LanguageProvider>
  </StrictMode>
);
