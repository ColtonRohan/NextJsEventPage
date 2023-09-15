import React from "react";
import EventItem from "./EventItem";

import classes from "./EventList.module.css";
import useSWR from "swr";

const EventList = (props) => {
  // const { data, error } = useSWR(
  //   "https://nextjs-course-59b55-default-rtdb.firebaseio.com/events.json",
  //   (url) => fetch(url).then((res) => res.json())
  // );
  // console.log(data);
  // console.log(props.items);

  return (
    <ul className={classes.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
