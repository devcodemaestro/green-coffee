import React, { useEffect, useState } from "react";

const Watch = () => {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const timeId = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timeId);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return <div>{date.toLocaleTimeString()}</div>;
};

export default Watch;
