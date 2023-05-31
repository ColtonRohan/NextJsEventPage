import { getFeaturedEvents } from "./api/getEvents";

import EventList from "../../components/events/EventList";

export default function Home(props) {
  console.log(props.events[0]);
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
