import React from "react";
import { useLocation } from "react-router-dom";

const EventDetail = () => {
  const location = useLocation();
  // 전달받은 데이터 접근
  const { eventInfo } = location.state || { eventInfo: null };
  console.log("location", location);
  if (!eventInfo) {
    return <div>No event data available.</div>;
  }

  return (
    <div>
      <img src={eventInfo.imageUrl} width="100%" alt="Event" />
    </div>
  );
};

export default EventDetail;
