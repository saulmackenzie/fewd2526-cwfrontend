import React, {createContext, useContext, useCallback, useEffect, useState} from "react";
import { allEvents } from "../apis/allEvents";

const EventsContext = createContext(null);

export function EventsProvider({ children }) {
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await allEvents();
            setEvents(data);
        } catch (err) {
            setError(err?.message ?? String(err));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const addEvent = useCallback((event) => setEvents(prev => (prev ? [...prev, event] : [event])), []);
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