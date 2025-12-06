import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/EventCard.module.css';

export default function EventCard({event}) { 
  return (
    <div class={`card shadow-sm bg-dark ui-gradient text-white ${styles.ecBg}`} style={{ width: '18rem' }}>
      <img src={event?.image ?? "https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"} class="card-img-top" alt={event?.event + " Image" ?? "Placeholder Image"} />
      <hr className="w-75 mx-auto my-0" />
      <div class="card-body">
        <h5 class="card-title text-capitalize">{event?.event ?? "Event Name"}</h5>
        <div className="fw-light">
          <p class="card-text">{event.startTime} to {event.endTime}, {event.date}</p>
          <p class="card-text">{event?.description ?? "Lorem ipsum dolor sit amet."}</p>
          <p class="card-text text-capitalize">{event.location}</p>
        </div>
        <div className="text-end">
          <Link to={"/event/" + event._id} className={`btn btn-primary-outline text-white ${styles.ecButton}`}>View</Link>
        </div>
      </div>
    </div>
  );
}