import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/EventList";

const Slug = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filtredYear = filteredData[0];
  const filtredMonth = filteredData[1];

  const yearNumber = +filtredYear;
  const monthNumber = +filtredMonth;

  if (
    isNaN(yearNumber) ||
    isNaN(monthNumber) ||
    yearNumber > 2030 ||
    yearNumber < 2019 ||
    monthNumber < 1 ||
    monthNumber > 12 ||
    filteredData.length > 2
  ) {
    return <p>Invalid Filter please change your values</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: yearNumber,
    month: monthNumber,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events Found for the selected filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default Slug;
