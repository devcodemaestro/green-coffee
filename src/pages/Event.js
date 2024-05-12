import React, { useEffect, useState } from "react";
import { getEvent } from "../api/homeAxios";
import EventItem from "../components/event/EventItem";
import { EventInner, EventWrap } from "../styles/EventStyle";
const Event = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getEvent(setEventData);
  }, []);

  console.log("eventData", eventData);
  return (
    <EventWrap>
      <EventInner>
        <EventItem eventData={eventData} />
      </EventInner>
    </EventWrap>
  );
};

export default Event;
