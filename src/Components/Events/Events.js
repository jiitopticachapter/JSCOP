import React from 'react'
import './Events.css'

function Events() {
  return (
    <div className='Events'>
         <header className="section-header">
          <div className="center">
            <h2 className="section-title">
             Events<br />
             
            </h2>
          </div>
        </header>
        
<div className="wrapper">
  <div className="card"><img alt="events" src="quiz-time.webp"/>
    <div className="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
  <div className="card"><img alt="events" src="coding-contest.jpg"/>
    <div className="info">
      <h1>Road</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
  <div className="card"><img alt="events" src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
    <div className="info">
      <h1>Road</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
  <div className="card"><img alt="events" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
    <div className="info">
      <h1>Protester</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Events