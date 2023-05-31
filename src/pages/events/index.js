import React from "react";

import { getAllEvents } from "../api/getEvents";
import EventList from "../../../components/events/EventList";
import EventsSearch from "../../../components/events/EventsSearch";
import { useRouter } from "next/router";
import useSWR from "swr";

const index = (props) => {
  // const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;

    router.push(fullpath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getAllEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 600,
  };
}

export default index;
