import React from "react";

function EventCard({ event }) {
  return (
    <div className="event-card-cont">
      <img src={event.img} alt={event.title} />
      <h3>{event.title}</h3>
      <h4>{event.duration}</h4>
      <p>{event.about}</p>
      <a href={event.link} target="_blank" rel="noreferrer">
        Read more
      </a>
    </div>
  );
}

export default EventCard;
