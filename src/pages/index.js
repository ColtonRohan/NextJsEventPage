import Image from "next/image";
import { Inter } from "next/font/google";

import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

export default function Home() {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
