    import React, { Component } from 'react';

    export default  class Work extends Component {
      render() {
        return (
           <section id="work">

            {/* WORK SECTION */}
            <div className="row work">
                <div className="twelve columns header-col">
                  <h1><span>Experience</span></h1>
                  <h3>Software Developer + IT Support</h3>
                  <h5>Crossmark Australia</h5>
                  <p>This full-time position involves designing, building, and developing mobile applications through Android Studio making use of Java and XML. Providing application support alognside the development. </p>
              
                </div>
              <p>
                <p className='twelve columns'>- Manage tickets and troubleshoot app issues over the phone and in the office<br></br>
    - Setup PCs and accounts for field employees and office staff<br></br>
    - Learn and modify current android app / add new features as per clients’ request (bilingual app for Apple)<br></br>
    - Thinking outside the box to provide solutions to quickly gather and forward data to a data sheet on PC</p>
    </p>
    <div className="twelve columns header-col">
                <h3>Web Developer</h3>
              <h5>Volunteer Project</h5>
              </div>
              <p>This volunteer project involves redesigning and developing a React web application. The full-stack development includes designing structure being exposed to SQL Server and NodeJS.</p>
              <p>
                <p className='twelve columns'>- Designed and created a customised blog-based website for the organisation
    <br></br>
    - Learnt and developed multiple components of the site working with both front end and back end
    <br></br>
    - Composed the product using Angular JS and HTML
    <br></br>
                  - Made the web application responsive for multi-platform use using bootstrap<br></br>
                  - Gained knowledge in other technologies such as NodeJS, Microsoft SQL server, WinSCP, GitHub & Linux

    </p>
    </p>
            </div>


            {/* <div className="row skill">

                <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                  <p>
                  {resumeData.skillsDescription}
                  </p>

              <div className="bars">

                <ul className="skills">
                    {
                      resumeData.skills && resumeData.skills.map((item) => {
                        return(
                          <li>
                          <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                          </span><em>{item.skillname}</em>
                          </li>
                        )
                      })
                    }

                </ul>

              </div>

            </div>

            </div> */}

          </section>
         
        );
      }
    }