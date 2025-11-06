import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// States
import { useEventsState } from "../states/eventsState";
import { useAuthState } from "../states/authState";

// API
import deleteEvent from "../apis/deleteEvent";

// CSS
import styles from "./css/Event.module.css";

function Event() {
    const { events, loading, error, refresh } = useEventsState();
    const { user, isAuthenticated } = useAuthState();
    const { id } = useParams();
    const nav = useNavigate();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const event = Array.isArray(events)
        ? events.find((evt) => String(evt._id) === String(id))
        : null;

    console.log("Event:", event);

    if (!event) return <div>Event does not exist or is not assigned to your family</div>;

    const handleDeleteEvent = async () => {
        try {
            await deleteEvent(event);
            refresh();
            nav("/");
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="container mx-auto py-4">
            <div className="row min-vh-100">
                <div className={`col-6 ${styles.imageContainer}`}>
                    <img src={event?.image ?? "https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"} alt={event?.event + " Image" ?? "Placeholder Image"} />
                </div>
                <div className={`col-6 ${styles.detailsContainer}`}>
                    <h1>{event.event ?? "Untitled Event"}</h1>
                    <div>
                      <p>{event.startTime} to {event.endTime}, {event.date}</p>
                      <p>{event?.description ?? "Lorem ipsum dolor sit amet."}</p>
                      <p>Location: {event.location}</p>
                      <button type="button" className="btn btn-danger" onClick={handleDeleteEvent}>Delete Event</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;