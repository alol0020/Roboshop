import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default ({ component: C, props: cProps, ...rest }) => {
  return (
    <div>
      <Navbar {...cProps} />
      <Route {...rest} render={(props) => <C {...props} {...cProps} />} />;
    </div>
  );
};
