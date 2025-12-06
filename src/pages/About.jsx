function About() {
    return (
        <div className="container mt-4 py-4">
            <h1 className="text-white display-3">About<span className="fw-semibold"> NestPlan</span></h1>
            <section className="mb-5">
                <div className="lead text-white">
                    <p><span className="fw-semibold">NestPlan</span> helps families plan and manage fun events and days out, making it easy to stay organised and connected.</p>
                    <p>Our focus is on family-friendly outings: create event itineraries, coordinate who brings what, and keep everyone informed before, during and after the day.</p>
                </div>

                <div className="bg-dark ui-gradient shadow-sm p-3 rounded mb-3 text-white">
                    <h2 className="display-5">Key features</h2>
                    <ul className="list-group list-group-flush shadow-sm">
                        <li className="list-group-item bg-dark ui-gradient text-white lead">Create event pages and itineraries</li>
                        <li className="list-group-item bg-dark ui-gradient text-white lead">Add family members to your account and select attendees</li>
                        <li className="list-group-item bg-dark ui-gradient text-white lead">Checklists for packing, snacks, and supplies</li>
                        <li className="list-group-item bg-dark ui-gradient text-white lead">Reminders, calendar sync, and in-app notifications</li>
                        <li className="list-group-item bg-dark ui-gradient text-white lead">Save favourite venues and family notes for quick planning</li>
                    </ul>
                </div>

                <div className="bg-dark ui-gradient shadow-sm p-3 rounded mb-3 text-white">
                    <h2 className="display-5">Our mission</h2>
                    <p className="lead mx-3">
                        To make family days out easier and more enjoyable by removing logistical friction so everyone can focus on making memories together.
                    </p>
                </div>
                
                <div className="bg-dark ui-gradient shadow-sm p-3 rounded text-white">
                    <h2 className="display-5">Get involved</h2>
                    <p className="lead mx-3">
                        Have feedback or ideas for family-friendly features? Visit the contact page to share suggestions or contribute to improving NestPlan.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;