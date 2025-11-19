import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// States
import { useAuthState } from '../../states/authState';
import { useEventsState } from '../../states/eventsState';

function NewEvent() {
    const {user, isAuthenticated} = useAuthState();
    const {addEvent} = useEventsState();
    const [form, setForm] = useState({ 
        event:          '', 
        date:           '',
        startTime:      '',
        endTime:        '',
        location:       '',
        requiredItems:  '',
    });
    const [validForm, setValidForm] = useState(false);
    
    const nav = useNavigate();

    useEffect(() => {  
        console.log("Checking auth status");
        if (!user || !isAuthenticated) nav("/");
    }, [isAuthenticated, user, nav]);

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

    const submit = async (e) => {
        e.preventDefault();
        try {
            const eventData = {
                event:          form.event,
                date:           form.date,
                startTime:      form.startTime,
                endTime:        form.endTime,
                location:       form.location,
                requiredItems:  form.requiredItems,
                username:       user.username,
                userfamily:     user.familyId,
                userrole:       user.role
            };
            await addEvent(eventData);
            nav("/");
        } catch (err) {
            console.log("Creating new event failed:", err);
        }
    };

    return (
        <div className="container mt-4 py-4">
            <h5>New Event Menu</h5>
            <form onSubmit={submit} className="row g-2 align-items-center mb-3">
                <div className="col-md-3">
                    <label className="form-label">Event Name:</label>
                    <input 
                        className="form-control"
                        placeholder="Swimming, Tennis..."
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
                        onChange={e => {
                            setForm({...form, requiredItems: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>

                <div className="col-md-2 d-grid">
                    <button type="submit" className="btn btn-outline-secondary" disabled={!validForm}>Create Event</button>
                </div>
            </form>
        </div>
    );
}

export default NewEvent;