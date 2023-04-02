import React from 'react'
import { events } from '../data/events'
import EventCard from './EventCard'

function Events() {
    return (
        <section className='new-section'>
            <h1>Upcoming Events</h1>
            <div className='events-card-cont'>
                {
                    events.map((event) => {
                        return <EventCard key={event.id} event={{ ...event }} />
                    })
                }
            </div>
        </section>
    )
}

export default Events