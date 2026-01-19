
// import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";

// import App from "./App";
// import ProtectedRoute from "./components/ProtectedRoute";

// const Loader = () => (
//   <div className="h-screen flex items-center justify-center">
//     Loading...
//   </div>
// );

// // Lazy pages
// const IntroPage = lazy(() => import("./pages/IntroPage"));
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Gallery = lazy(() => import("./pages/Gallery"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
// const AlbumPage = lazy(() => import("./pages/AlbumPage"));
// const Testimonials = lazy(() => import("./pages/Testimonials"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Login = lazy(() => import("./pages/Login"));
// const Admin = lazy(() => import("./pages/Admin"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Suspense fallback={<Loader />}>
//         <IntroPage />
//       </Suspense>
//     ),
//   },

//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "home", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
//       { path: "about", element: <Suspense fallback={<Loader />}><About /></Suspense> },
//       { path: "gallery", element: <Suspense fallback={<Loader />}><Gallery /></Suspense> },
//       { path: "portfolio", element: <Suspense fallback={<Loader />}><Portfolio /></Suspense> },
//       { path: "album/:name", element: <Suspense fallback={<Loader />}><AlbumPage /></Suspense> },
//       { path: "testimonials", element: <Suspense fallback={<Loader />}><Testimonials /></Suspense> },
//       { path: "contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
//     ],
//   },

//   {
//     path: "/login",
//     element: (
//       <Suspense fallback={<Loader />}>
//         <Login />
//       </Suspense>
//     ),
//   },

//   {
//     path: "/admin",
//     element: (
//       <ProtectedRoute>
//         <Suspense fallback={<Loader />}>
//           <Admin />
//         </Suspense>
//       </ProtectedRoute>
//     ),
//   },
// ]);

// export default router;



import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";

const Loader = () => (
  <div className="h-screen flex items-center justify-center">
    Loading...
  </div>
);

// Lazy pages
const IntroPage = lazy(() => import("./pages/IntroPage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const AlbumPage = lazy(() => import("./pages/AlbumPage"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./pages/Admin"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <IntroPage />
      </Suspense>
    ),
  },

  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<Loader />}><About /></Suspense> },
      { path: "gallery", element: <Suspense fallback={<Loader />}><Gallery /></Suspense> },
      { path: "portfolio", element: <Suspense fallback={<Loader />}><Portfolio /></Suspense> },
      { path: "album/:name", element: <Suspense fallback={<Loader />}><AlbumPage /></Suspense> },
      { path: "testimonials", element: <Suspense fallback={<Loader />}><Testimonials /></Suspense> },
      { path: "contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
    ],
  },

  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loader />}>
          <Admin />
        </Suspense>
      </ProtectedRoute>
    ),
  },
]);

export default router;

