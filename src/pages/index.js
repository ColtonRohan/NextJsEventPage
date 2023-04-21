import Image from "next/image";
import { Inter } from "next/font/google";
import useSWR from "swr";
import { getFeaturedEvents } from "../../helpers/api-util";

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
  };
}
