import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "string",
  });
  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time></time>
          </div>
          <div>
            <address>ADRESS</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

EventItem.propTypes = {};

export default EventItem;
