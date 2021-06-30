import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Work from '../components/Work'
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import resumeData from '../resumeData';

function Home() {
    return (
         <div className="App">
            <Header resumeData={resumeData}/>
            <About resumeData={resumeData}/>
            <Resume resumeData={resumeData}/>
            {/* <Portfolio resumeData={resumeData}/> */}
            {/* <Testimonials resumeData={resumeData}/> */}
            <Work/>
            <ContactUs resumeData={resumeData} />
        
        {/* <Footer resumeData={resumeData}/> */}
      </div>
    )
}

export default Home
