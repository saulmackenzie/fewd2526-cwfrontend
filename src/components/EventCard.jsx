import React from 'react';

export default function EventCard({event}) { 
  return (
    <div class="card" style={{ width: '18rem' }}>
      <img src={event?.image ?? "https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"} class="card-img-top" alt={event?.event + " Image" ?? "Placeholder Image"} />
      <div class="card-body">
        <h5 class="card-title">{event?.event ?? "Event Name"}</h5>
        <p class="card-text">{event.startTime} to {event.endTime}, {event.date}</p>
        <p class="card-text">{event?.description ?? "Lorem ipsum dolor sit amet."}</p>
        <p class="card-text">Location: {event.location}</p>
        <a href={"event/" + event._id} class="btn btn-primary">View Event</a>
      </div>
    </div>
  );
}