import type { RouteObject } from "react-router-dom";
import AntLayout from "../components/AntLayout";
import AntLayoutMinimal from "../components/AntLayoutMinimal";
import AntLayoutSidebar from "../components/AntLayoutSidebar";
import { Navigate, Outlet } from 'react-router-dom';
import EmailVerificationPage from "../pages/emailverification.page";
import ForgotPasswordPage from "../pages/forgotpassword.page";
import HomePage from "../pages/home.page";
import ClusterPage from "../pages/cluster.page";
import ClustersAllPage from "../pages/clustersAll.page";
import LoginPage from "../pages/login.page";
import ProfilePage from "../pages/profile.page";
import RegisterPage from "../pages/register.page";
import ResetPasswordPage from "../pages/resetpassword.page";
import useStore from "../store";

const authRoutes: RouteObject = {
  path: "*",
  element: <AntLayoutMinimal />,
  children: [
    {
      path: "",
      index: true,
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
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


const PrivateOutlet = () => {
  const store = useStore();
  console.log(store)
  if (store.authUser == null) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}

// clusterId="f132347e-a50a-4ba1-8e55-a2258d784140"
const normalRoutes: RouteObject = {
  path: "*",
  element: <AntLayoutSidebar />,
  children: [
    {
      path: "console",
      children: [
        {
          path: "",
          element: <ClusterPage  />,
        }, 
        {
          path: "home",
          element: <ClustersAllPage  />,
        }, 
        {
          path: "clusters/",
          element: <ClustersAllPage  />,
        }, 
        {
          path: "clusters/:clusterId",
          element: <ClusterPage />,
        },
      ],
    },
    {
      path: "",
      children: [
        {
          path: "",
          element: <ClusterPage  />,
        }, 
      ],
    },
  ]
};

const routes: RouteObject[] = [authRoutes, normalRoutes];

export default routes;
