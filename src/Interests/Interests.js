import './Interests.css'

function Interests() {
  return (
    <section id = "interests">
    <div className="interests">
      <h1 id = "title">Involvement and Interests</h1>
      <div className="activity">
        <h2 className="heading">UNL Multicultural Engineering Program</h2>
        <p className="description">I am involved in a selective academic program, focused on commitment and experience towards leadership and diversity.</p>
      </div>
      <div className="activity">
        <h2 className="heading">Lead Volunteer</h2>
        <p className="description">I operated the welcome center, greeted and directed hospital visitors and patients in finding rooms, clinic, or departments. Additionally, I trained and supervised teen volunteers in departments to ensure they were comfortable and satisfied in their positions.</p>
      </div>
      <div className="activity">
        <h2 className="heading">Basketball</h2>
        <p className="description">I love to play and watch basketball. My favorite team since middle school has been the Detroit Pistons.</p>
      </div>
      <div className="activity">
        <h2 className="heading">FishKeeping</h2>
        <p className="description">I have a 50 gallon fish tank with many different species of tropical fish. One of my favorite activities is the aquascaping and making the aquarium look neat.</p>
      </div>
    </div>
    </section>
  );
}

export default Interests;
