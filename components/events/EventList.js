import React from "react";
import PropTypes from "prop-types";
import EventItem from "./EventItem";

const EventList = (props) => {
  return (
    <ul>
      {props.items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
};

export default EventList;
