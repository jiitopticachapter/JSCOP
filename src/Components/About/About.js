import React from "react";

import "./About.css";

function About() {
  return (
    <div className="About" id="About">
        <section type="whats-new" in-view="fade-up" className="in-view">
            <header className="About-header">
                <div className="center">
                    <h2 in-view="fade-right" className="section-title" > 
                        About 
                        <br />
                        {/* <span>JSCOP 4.0</span> */}
                    </h2> 
                </div> 
            </header>
        </section>
        <section>
            <div className="center">
                <p
                    >In the last few years, we have come to terms with the fact that
                    there can be nothing in real life which isn't possible and there
                    is nothing which we can Ctrl+ delete from the existence of our
                    history. Good, bad, endearing - all sorts of memories within our
                    heart, we always tend to look forward to what is yet to come with
                    infinite dreams and aspirations along with a ray of hope to go
                    beyond the knowns and unknowns and discover new
                    forms with our creative and curious minds.
                    With this hope and motto in our thoughts,
                    JIIT OPTICA STUDENT CHAPTER 
                </p> 
            </div>
        </section>
    </div>
  );
}

export default About;
