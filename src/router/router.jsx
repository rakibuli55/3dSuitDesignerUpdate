import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About";
import ForgotPass from "../pages/AuthPages/ForgotPassPage";
import LoginPage from "../pages/AuthPages/LoginPage";
import ResetPassPage from "../pages/AuthPages/ResetPassPage";
import SignupPage from "../pages/AuthPages/SignupPage";
import VerifyOtpPage from "../pages/AuthPages/VerifyOtpPage";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home";
import PaymentError from "../pages/PaymentError";
import PaymentSuccess from "../pages/PaymentSuccess";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import PublicRoute from "../routes/PublicRoute";
import UserProfilePage from "../pages/UserProfilePage";
import PrivateRoute from "../routes/PrivateRoute";

// Lazy load components to improve initial load performance
const Customization = lazy(() => import("../pages/Customization"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/customize",
        element: (
          <Suspense fallback={null}>
            <Customization />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment-error",
        element: <PaymentError />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        ),
      },
      {
        path: "/reset-password",
        element: (
          <PublicRoute>
            <ResetPassPage />
          </PublicRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <PublicRoute>
            <ForgotPass />
          </PublicRoute>
        ),
      },
      {
        path: "/verify-otp",
        element: (
          <PublicRoute>
            <VerifyOtpPage />
          </PublicRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfilePage />
          </PrivateRoute>
        )
      },
    ],
  },
]);

export default router;
