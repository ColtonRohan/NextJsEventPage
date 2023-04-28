import React from "react";

import { getEventById, getFeaturedEvents } from "../api/getAllEvents";

import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import ErrorAlert from "../../../components/ui/ErrorAlert";
import Button from "../../../components/ui/Button";

const ID = (props) => {
  const event = props.events;
  // console.log(event);

  if (!event) {
    return (
      <>
        <div className="center">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  console.log(eventId);
  const featuredEvents = await getEventById(eventId);
  // console.log(featuredEvents);
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const ids = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: ids,
    fallback: "blocking",
  };
}

export default ID;
