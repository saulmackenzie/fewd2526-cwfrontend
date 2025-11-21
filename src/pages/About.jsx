function About() {
    return (
        <div className="container mt-4 py-4">
            <h1 className="text-white display-5">About<span className="fw-semibold"> NestPlan</span></h1>
            <section className="mb-5">
                <div className="lead text-white">
                    <p><span className="fw-semibold">NestPlan</span> helps families plan and manage fun events and days out, making it easy to stay organised and connected.</p>
                    <p>Our focus is on family-friendly outings: create event itineraries, coordinate who brings what, and keep everyone informed before, during and after the day.</p>
                </div>

                <div className="bg-white shadow-sm p-3 rounded mb-3">
                    <h2>Key features</h2>
                    <ul>
                        <li>Create sharable event pages and itineraries</li>
                        <li>Invite family members and track RSVPs</li>
                        <li>Collaborative checklists for packing, snacks, and supplies</li>
                        <li>Simple schedule and route planning with estimated travel times</li>
                        <li>Reminders, calendar sync, and in-app notifications</li>
                        <li>Save favourite venues and family notes for quick planning</li>
                    </ul>
                </div>

                <div className="bg-white shadow-sm p-3 rounded mb-3">
                    <h2>Our mission</h2>
                    <p>
                        To make family days out easier and more enjoyable by removing logistical friction so everyone can focus on making memories together.
                    </p>
                </div>
                
                <div className="bg-white shadow-sm p-3 rounded">
                    <h2>Get involved</h2>
                    <p>
                        Have feedback or ideas for family-friendly features? Visit the contact page to share suggestions or contribute to improving NestPlan.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;