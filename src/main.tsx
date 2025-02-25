import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Portfolio from "./Pages/Portfolio/Portfolio.tsx";
const resumeLink: string = import.meta.env.VITE_LINK_TO_RESUME;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/web-portfolio-2.0/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path={resumeLink} element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)