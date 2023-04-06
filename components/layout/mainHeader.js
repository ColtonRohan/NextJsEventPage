import Link from "next/link";
import React from "react";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <div>
          <Link href="/events">All Events</Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
