import React, { useState, useEffect } from "react";

// States
import { useEventsState } from "../../states/eventsState";
import { useAuthState } from "../../states/authState";

// API
import editEvent from "../../apis/editEvent";

function EditEventForm({ eventData }) {
    const { refresh } = useEventsState();
    const { user } = useAuthState();
    const [form, setForm] = useState({ 
        event:          '', 
        date:           '',
        startTime:      '',
        endTime:        '',
        location:       '',
        requiredItems:  ''
    });
    const [validForm, setValidForm] = useState(false);
    
    const id = eventData._id;

    useEffect(() => {
        if (eventData) {
            setForm({
                event:          eventData.event ?? '', 
                date:           eventData.date ?? '',
                startTime:      eventData.startTime ?? '',
                endTime:        eventData.endTime ?? '',
                location:       eventData.location ?? '',
                requiredItems:  eventData.requiredItems ?? ''
            });
        }
    }, [eventData]);

    const checkValid = () => {
        const isValid = () => {
            if (
                form.event          !== "" && 
                form.date           !== "" && 
                form.startTime      !== "" && 
                form.endTime        !== "" && 
                form.location       !== "" && 
                form.requiredItems  !== "")
                return true;
        };
        setValidForm(isValid);
    };

    const handleEditEvent = async () => {
        try {
            eventData = {
                id:             id,
                event:          form.event,
                date:           form.date,
                startTime:      form.startTime,
                endTime:        form.endTime,
                location:       form.location,
                requiredItems:  form.requiredItems,
                user:           user.username,
                familyId:       user.familyId,
            };
            console.log(eventData);
            await editEvent(eventData);
            await refresh();
        } catch (err) {
            console.error("Edit failed:", err);
        }
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit {eventData.event}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                 <form onSubmit={handleEditEvent} className="row g-2 align-items-center mb-3">
                <div className="col-md-3">
                    <label className="form-label">Event Name:</label>
                    <input 
                        className="form-control"
                        placeholder="Swimming, Tennis..."
                        value={`${form.event}`}
                        onChange={e => {
                            setForm({...form, event: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Date:</label>
                    <input 
                        type="date"
                        className="form-control" 
                        value={`${form.date}`}
                        onChange={e => {
                            setForm({...form, date: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Start Time:</label>
                    <input 
                        type="time" 
                        className="form-control"
                        value={`${form.startTime}`}
                        onChange={e => {
                            setForm({...form, startTime: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label">End Time:</label>
                    <input
                        type="time"
                        className="form-control"
                        value={`${form.endTime}`}
                        onChange={e => {
                            setForm({...form, endTime: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Location:</label>
                    <input 
                        className="form-control" 
                        placeholder="Swim Centre, Tennis Park... "
                        value={`${form.location}`}
                        onChange={e => {
                            setForm({...form, location: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Required Items:</label>
                    <input 
                        className="form-control" 
                        placeholder="Trunks, Tennis Racket... "
                        value={`${form.requiredItems}`}
                        onChange={e => {
                            setForm({...form, requiredItems: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>

                <button type="submit" className="btn btn-primary" disabled={!validForm}>Save changes</button>

            </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default EditEventForm;