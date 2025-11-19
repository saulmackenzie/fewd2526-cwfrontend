import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({event}) { 
  return (
    <div class="card shadow-sm" style={{ width: '18rem' }}>
      <img src={event?.image ?? "https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"} class="card-img-top" alt={event?.event + " Image" ?? "Placeholder Image"} />
      <hr className="w-75 mx-auto my-0" />
      <div class="card-body">
        <h5 class="card-title">{event?.event ?? "Event Name"}</h5>
        <p class="card-text">{event.startTime} to {event.endTime}, {event.date}</p>
        <p class="card-text">{event?.description ?? "Lorem ipsum dolor sit amet."}</p>
        <p class="card-text">{event.location}</p>
        <div className="text-end">
          <Link to={"/event/" + event._id} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  );
}