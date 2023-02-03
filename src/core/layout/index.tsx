import React, { Fragment, ReactNode } from "react";
import Header from "../../components/header";
// import Footer from "../../components/footer/footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;