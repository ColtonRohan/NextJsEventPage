import { Fragment } from "react";
import MainHeader from "./mainHeader";

const layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default layout;
