import './About.css';

function About() {
  return (
    <section id = "about">
    <div id="background">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 id="aboutTitle">About</h1>
            <div id = "hovering">
            <p className="text-center">
            I am a junior computer science major at the University of Nebraska, Lincoln, with 3 years of experience in full-stack development through internships. I am passionate about technology and creating tools that have a positive impact on the world. 
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
