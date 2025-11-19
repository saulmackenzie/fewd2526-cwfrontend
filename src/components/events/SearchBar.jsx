import React from "react";

function SearchBar({ value = '', onChange = () => {}}) {
    return (
        <form className="row g-2 align-items-center mb-3">
            <div className="col-md-4">
                <label className="form-label">Search</label>
                <input 
                    className="form-control" 
                    placeholder="name, location, equipment"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </form>
    );
}

export default SearchBar;