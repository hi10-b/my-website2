  import React, { Component } from 'react';
  export default class ContactUs extends Component {
    render() {
      let resumeData = this.props.resumeData;
      return (
        <section id="contact">
          
          <div className="row section-head">
            
              <div className="twelve columns">
                <p className="lead">
                Feel free to contact me for any work or suggestions below
                </p>
              </div>
            </div>
            <div className="row">
              <aside className="nine columns footer-widgets">
              <div className="widget">
                <h4>Email: <a href="mailto:hitenbhudia01@gmail.com" target="blank">hitenbhudia01@gmail.com</a></h4>
                
                <h4>LinkedIn: <a href="https://www.linkedin.com/in/hiten-bhudia/" target="blank">linkedin.com/in/hiten-bhudia/</a></h4>
                <h4>GitHub: <a href="https://github.com/hi10-b" target="blank">github.com/hi10-b</a></h4>
                </div>
            </aside>
            

            <div className="three columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        
          </div>


          
          </section>
          );
    }
  }