import {
  Route,
  BrowserRouter as Router,
  Routes,
  RouteProps,
} from "react-router-dom";
import Layout from "../core/layout";
import { FC, Suspense, lazy } from "react";
import Loader from "../components/loader/loader";

const Home = lazy(() => import("../pages/homepage"));
const UnderConstruction = lazy(()=>import('../pages/underconstruction'))

const appRoutes: RouteProps[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <UnderConstruction />,
  },
  {
    path: "/advertise",
    element: <UnderConstruction />,
  },
  {
    path: "/premium",
    element: <UnderConstruction />,
  },
  {
    path: "/login",
    element: <UnderConstruction />,
  },
  {
    path: "/signup",
    element: <UnderConstruction />,
  },
  {
    path: "/postphoto",
    element: <UnderConstruction />,
  },
];

const Navigation: FC = () => (
  <Router>
    <Layout>
      <Routes>
        {appRoutes?.map((route: RouteProps) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              }
            />
          );
        })}
      </Routes>
    </Layout>
  </Router>
);

export default Navigation;
