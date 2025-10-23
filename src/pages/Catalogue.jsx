function Catalogue() {
    return (
        <div className="container mt-4 py-4">
            <h1>Events Catalogue</h1>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );    
}

export default Catalogue;