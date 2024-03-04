import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useStore from "../store";
import Spinner from "./Spinner";
import { logoutUserFn } from "../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { Menu } from 'antd';
import type { MenuProps } from "antd";

const Header = () => {
  const store = useStore();
  const user = store.authUser;

  //const items: MenuProps["items"] = [
  //  {
  //    label: <a href="/clusters">Clusters</a>,
  //    key: "clusters",
  //  },
  //  {
  //    label: <a href="/apps">Apps</a>,
  //    key: "apps",
  //  },
  //];



  const { mutate: logoutUser } = useMutation(() => logoutUserFn(), {
    onMutate(variables) {
      store.setRequestLoading(true);
    },
    onSuccess(data) {
      store.setRequestLoading(false);
      toast.success("Successfully logged out", {
        position: "top-right",
      });
      document.location.href = "/login";
    },
    onError(error: any) {
      store.setRequestLoading(false);
      store.setAuthUser(null);
      document.location.href = "/login";
    },
  });


  const handleLogout = () => {
    logoutUser();
  };

  const userMenu: MenuProps["items"] = ((user) => {
    if (user == null) { 
      return [
        {
          label: <a href="/register">Register</a>,
          key: "register",
        },
        {
          label: <a href="/login">Login</a>,
          key: "login",
        },
      ];
    } else {
      return [
        {
          label: <a href="/">Home</a>,
          key: "home",
        },
        {
          label: <a href="/profile">Profile</a>,
          key: "profile",
        },
        {
          label: <li className="cursor-pointer" onClick={handleLogout}>Logout</li>,
          key: "logout",
        },
      ];

    }
  })(user);


  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log("click ", e);
    store.currenCluster(e.key)
  };


  return (
    <>
      <header className="bg-white h-15">

        <nav className="h-full flex justify-between container items-center">

          <div className="flex">
            <Link to="/console" className="site-header text-ct-dark-600 text-2xl font-semibold">
              <img className="site-logo" height="32" width="32" src="/logo.svg" />
            </Link>
          </div>
          <div className="flex">
            <Menu
              selectedKeys={"home"}
              mode="horizontal"
              items={userMenu}
            />
          </div>
        </nav>

      </header>

      <div className="pt-4 pl-2 bg-ct-blue-600 fixed">
        {store.requestLoading && <Spinner color="text-ct-yellow-600" />}
      </div>
    </>
  );
};

export default Header;
