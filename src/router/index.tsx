import type { RouteObject } from "react-router-dom";
import AntLayout from "../components/AntLayout";
import EmailVerificationPage from "../pages/emailverification.page";
import ForgotPasswordPage from "../pages/forgotpassword.page";
import HomePage from "../pages/home.page";
import ClusterPage from "../pages/cluster.page";
import LoginPage from "../pages/login.page";
import ProfilePage from "../pages/profile.page";
import RegisterPage from "../pages/register.page";
import ResetPasswordPage from "../pages/resetpassword.page";

const authRoutes: RouteObject = {
  path: "*",
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "verifyemail",
      element: <EmailVerificationPage />,
      children: [
        {
          path: ":verificationCode",
          element: <EmailVerificationPage />,
        },
      ],
    },
    {
      path: "forgotpassword",
      element: <ForgotPasswordPage />,
    },
    {
      path: "resetpassword/:resetCode",
      element: <ResetPasswordPage />,
    },
  ],
};

const normalRoutes: RouteObject = {
  path: "*",
  element: <AntLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "clusters",
      children: [
        {
          path: "",
          element: <ClusterPage clusterId="f132347e-a50a-4ba1-8e55-a2258d784140"   />,
        },
      ],
    },
    {
      path: "profile",
      children: [
        {
          path: "",
          element: <ProfilePage />,
        },
      ],
    },
  ],
};

const routes: RouteObject[] = [authRoutes, normalRoutes];

export default routes;
