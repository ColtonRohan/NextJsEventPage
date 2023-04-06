import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../../../components/events/EventList";
import EventsSearch from "../../../components/events/EventsSearch";
import { useRouter } from "next/router";

const index = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;

    router.push(fullpath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default index;
