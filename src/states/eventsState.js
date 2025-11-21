import React, {createContext, useContext, useCallback, useEffect, useState} from "react";

// APIs
import { allEvents } from "../apis/allEvents";
import { newEvent } from "../apis/newEvent";

// States
import { useAuthState } from "./authState";

const EventsContext = createContext(null);

export function EventsProvider({ children }) {
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user, isAuthenticated } = useAuthState();

    const load = useCallback(async () => {
        setLoading(true);
        if (!isAuthenticated || !user) {
            // Return if user is not authenticated
            setEvents(null);
            setLoading(false);
            return;
        }
        setError(null);
        try {
            const data = await allEvents(user.familyId);
            setEvents(data);
        } catch (err) {
            setError(err?.message ?? String(err));
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated, user]);

    const addEvent = useCallback(async (event) => {
        setLoading(true);
        if (!isAuthenticated || !user) {
            // Return if user is not authenticated
            setEvents(null);
            setLoading(false);
            return;
        }
        setError(null);
        try {
            await newEvent(event);
        } catch (err) {
            setError(err?.message ?? String(err));
        } finally {
            setLoading(false);
            load();
        }
    }, [isAuthenticated, user, load]);

    useEffect(() => {
        load();
    }, [load]);

    // const addEvent = useCallback((event) => setEvents(prev => (prev ? [...prev, event] : [event])), []);
    const removeEvent = useCallback((id) => setEvents(prev => (prev ? prev.filter(e => e.id !== id) : prev)), []);

    return (
        <EventsContext.Provider value={{ events, loading, error, refresh: load, addEvent, removeEvent }}>
            {children}
        </EventsContext.Provider>
    );
}

export function useEventsState() {
    const context = useContext(EventsContext);
    if (!context) throw new Error("useEventsState must be used within an EventsProvider");
    return context;
}