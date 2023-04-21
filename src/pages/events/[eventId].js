import React from "react";
import { useRouter } from "next/router";

import { getEventById, getAllEvents } from "../../../helpers/api-util";

import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import ErrorAlert from "../../../components/ui/ErrorAlert";
import Button from "../../../components/ui/Button";

const ID = (props) => {
  const event = props.events;
  console.log(event);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event found</p>
        </ErrorAlert>
        <Button link="/events">Return Back</Button>
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
  console.log(featuredEvents);
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const ids = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: ids,
    fallback: false,
  };
}

export default ID;
