import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeLayout from "./Layouts/HomeLayout";
import ContactLayot from "./Layouts/ContactLayot";
import ContactPage from "./Pages/ContactPage";
import AboutLayout from "./Layouts/AboutLayout";
import AboutPage from "./Pages/AboutPage";
import ServicesLayout from "./Layouts/ServicesLayout";
import ServicesPage from "./Pages/ServicesPage";
import GalleryLayout from "./Layouts/GalleryLayout";
import GalleryPage from "./Pages/GalleryPage";
import CountryOverviewLayout from "./Layouts/CountryOverviewLayout";
import CountryOverviewPage from "./Pages/CountryOverviewPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [{ path: "", element: <HomePage/> }],
  },
  {
    path: "/contact",
    element: <ContactLayot/>,
    children: [{ path: "", element: <ContactPage/> }],
  },
  {
    path: "/aboutus",
    element: <AboutLayout/>,
    children: [{ path: "", element: <AboutPage/> }],
  },
  {
    path: "/services",
    element: <ServicesLayout/>,
    children: [{ path: "", element: <ServicesPage/> }],
  },
  {
    path: "/gallery",
    element: <GalleryLayout/>,
    children: [{ path: "", element: <GalleryPage/> }],
  },
  {
    path: "/countryOverview",
    element: <CountryOverviewLayout/>,
    children: [{ path: "", element: <CountryOverviewPage/> }],
  }
]);


export default router;
