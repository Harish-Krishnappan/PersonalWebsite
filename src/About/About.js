import './About.css';
import { Button } from 'react-bootstrap'
import resume from'./Resume.pdf'

function About() {
  return (
    <section id = "about">
    <div id="background">
      <br/>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 id="aboutTitle">About</h1>
            <p className="text-center">
            I am a Junior Computer Science major at the University of Nebraska, Lincoln, with 3 years of experience in full-stack development through internships. I am passionate about technology and creating tools that have a positive impact on the world. 
            <br></br><br></br>
            <a href={resume} download="myResume">
              <Button id = "resume" variant='primary-lg' size = "md">Download My Resume</Button>
            </a>
          </p>
          </div>
        </div>
      </div>
      <div id = "centerButton">
      </div>
      <br/>
    </div>
    </section>
  );
}

export default About;
