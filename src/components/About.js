import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {/* {
                 resumeData.aboutme
               } */}
                   A recent graduate completing Bachelors of Computing Science with Honours ( Interactive API recommendation methods ). Completing my studies at University of Technology Sydney I pursued a passion to become a proficient Software Developer. I try to devote my time to learning new technologies and enhancing my programming skills. 
                </p>
                <p>
                   Out of studies I tend to get distracted with my curiosity trying out new things. Photography, small projects, opening up PCs and hanging out with my friends a few things out of a big list. Watching sports and movies often keep me locked in my room more then playing out in the field.
                </p>

               {/* <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div> */}
            </div>
         </div>
      </section>
    );
  }
}