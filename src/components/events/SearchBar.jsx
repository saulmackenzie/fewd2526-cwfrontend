import React from "react";

function SearchBar({ value = '', onChange = () => {}}) {
    return (
        <form className="row g-2 align-items-center mb-4">
            <div className="col-md-4">
                <label className="form-label"><h4 className="fw-light">Search</h4></label>
                <input 
                    className="form-control shadow-sm" 
                    placeholder="event name"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </form>
    );
}

export default SearchBar;