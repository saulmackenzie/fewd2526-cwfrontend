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
            <h5 className="text-white">New Event Menu</h5>
            <form onSubmit={submit} className="row g-2 align-items-center mb-3">
                <div className="col-md-3">
                    <label className="form-label text-white">Event Name:</label>
                    <input 
                        className="form-control input-glass"
                        placeholder="Swimming, Tennis..."
                        onChange={e => {
                            setForm({...form, event: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">Date:</label>
                    <input 
                        type="text"
                        placeholder="dd/mm/yyyy"
                        onFocus={e => (e.target.type = "date")}
                        onBlur={e => { if (!e.target.value) e.target.type = "text"; }}
                        className="form-control input-glass" 
                        onChange={e => {
                            setForm({...form, date: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-labe text-white">Start Time:</label>
                    <input 
                        type="text"
                        placeholder="--:--"
                        onFocus={e => (e.target.type = "time")}
                        onBlur={e => { if (!e.target.value) e.target.type = "text"; }}
                        className="form-control input-glass"
                        onChange={e => {
                            setForm({...form, startTime: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">End Time:</label>
                    <input
                        type="time"
                        placeholder="--:--"
                        onFocus={e => (e.target.type = "time")}
                        onBlur={e => { if (!e.target.value) e.target.type = "text"; }}
                        className="form-control input-glass"
                        onChange={e => {
                            setForm({...form, endTime: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">Location:</label>
                    <input 
                        className="form-control input-glass" 
                        placeholder="Swim Centre, Tennis Park... "
                        onChange={e => {
                            setForm({...form, location: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">Required Items:</label>
                    <input 
                        className="form-control input-glass" 
                        placeholder="Trunks, Tennis Racket... "
                        onChange={e => {
                            setForm({...form, requiredItems: e.target.value})   
                            checkValid();
                        }}
                    />
                </div>

                <div className="col-md-2 d-grid">
                    <button type="submit" className="btn btn-primary-outline text-white btn-scale" disabled={!validForm}>Create Event</button>
                </div>
            </form>
        </div>
    );
}

export default NewEvent;