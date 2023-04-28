import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../api/getAllEvents";
import EventList from "../../../components/events/EventList";
import ResultsTitle from "../../../components/events/ResultsTitle";
import Button from "../../../components/ui/Button";
import ErrorAlert from "../../../components/ui/ErrorAlert";

const Slug = (props) => {
  const router = useRouter();

  // const filteredData = router.query.slug;

  // if (!filteredData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filtredYear = filteredData[0];
  // const filtredMonth = filteredData[1];

  // const yearNumber = +filtredYear;
  // const monthNumber = +filtredMonth;

  if (
    props.hasError
    // isNaN(yearNumber) ||
    // isNaN(monthNumber) ||
    // yearNumber > 2030 ||
    // yearNumber < 2019 ||
    // monthNumber < 1 ||
    // monthNumber > 12 ||
    // filteredData.length > 2
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter please change your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events Found for the selected filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

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
    return {
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: yearNumber,
    month: monthNumber,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: yearNumber,
        month: monthNumber,
      },
    },
  };
}

export default Slug;
