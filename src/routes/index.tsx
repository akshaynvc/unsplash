import {
  Route,
  BrowserRouter as Router,
  Routes,
  RouteProps,
} from "react-router-dom";
import HomePage from "../pages/homepage";
import Layout from "../core/layout";
import { FC } from "react";

const appRoutes: RouteProps[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];

const Navigation:FC = () => (
  <Router>
    <Layout>
      <Routes>
        {appRoutes?.map((route: RouteProps) => {
          return <Route key={route.path} {...route} />;
        })}
      </Routes>
    </Layout>
  </Router>
);

export default Navigation;
