    import React, { Component } from 'react';

    export default  class Resume extends Component {
      render() {
        let resumeData = this.props.resumeData;
        return (

       
          <section id="resume">

              {/* EDUCATION SECTION */}
            <div className="row education">

                <div className="twelve columns header-col">
                <h1><span>Education</span></h1>
                <h2>Bachelor of Computing Science (Honours)</h2>
                <h5>University of Technology Sydney (Completed: May 2021)</h5>
              
                <p>
                  <p className='three columns'>Major:</p>
                  <p className='nine columns'><u>Enterprise Systems Development</u><p>- Maths Modelling | software architecture and full stack development | database design and development | mobile design and development ( IOS & Android) | cyber security | networking | data structures and algorithm | statistics
                  | UR10e robot arm</p></p>

                  <p className='three columns'>Honours Project:</p>
                  <p className='nine columns'><u>Interactive API Recommendation Modelling</u><p>- Composition of project proposals (Literature review, thesis, aims, research, methodology) | peer review | 	sourcing and researching <br></br>- Research and Implementation of an API Random Walk Recommendation method</p></p>

    </p>
                </div>
                
            </div>
            

            </section>
        
        );
      }
    }