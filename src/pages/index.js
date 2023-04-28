import { getFeaturedEvents } from "./api/getAllEvents";

import EventList from "../../components/events/EventList";

export default function Home(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 600,
  };
}
