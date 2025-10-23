import React from 'react';

export default function EventCard({event}) {
    return (
        <div class="card" style={{ width: '18rem' }}>
          <img src={event?.image ?? "https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"} class="card-img-top" alt={event?.event + " Image" ?? "Placeholder Image"} />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
}