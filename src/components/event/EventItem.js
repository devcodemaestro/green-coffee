import { Link } from "react-router-dom";
import { ItemWrap } from "../../styles/MyPageStyle";

const EventItem = ({ eventData }) => {
  console.log("eventData", eventData);

  return (
    <ItemWrap>
      {eventData.map((item, index) => (
        <div key={index}>
          <Link to={"/eventdetail"} state={{ eventInfo: item }}>
            {item.imageUrl
              .split("/")
              .pop()
              .split(".")
              .slice(0, -1)
              .join(".")
              .split(8)
              .pop()}
          </Link>
        </div>
      ))}
    </ItemWrap>
  );
};

export default EventItem;
