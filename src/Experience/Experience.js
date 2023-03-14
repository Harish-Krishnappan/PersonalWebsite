import './Experience.css'
import spreetail from './s.logo.png'
import olsson from './o.logo.png'
import ameritas from './a.logo.png'
import unl from './u.logo.png'

function Experience()
{
  return(
		<section id = "experience">
				<br/>	<br/><br/>
    <div className="container">
		<h1 id = "workExperience">Work Experience</h1>
		<br/>
		<div className="row">
			<div className="col-md-6">
			<div className = "box1">
				<h1>Software Engineering Intern</h1>
				</div>
				<br/>
				<div className = "inline">
				<img src = {olsson} height = {55} width = {170} alt = "olsson"/>
				<h2>Design Studio</h2>
				<h3>August 2022 - Present</h3>
				</div>
        <ul>
					<li>Devolved web application using Javascript and AutoDesk Model Derivate APIs to to visualize 3d models</li>
					<li>Implemented file system to allow users to import and translate various Lidar files into Forge Viewer </li>
					<li>Conducted thorough testing and debugging to ensure the stability and performance of web application.</li>
          <li>Mentored and helped onboard other interns and provided guidance on technical challenges and best practices.</li>
					<li>Presented and demoed webpage models and features to stakeholders and at showcases</li>
				</ul>
			</div>
			<div className="col-md-6">
			<div className = "box1">
				<h1>Software Engineering Intern</h1>
				</div>
				<br/>
				<div className = "inline">
				<img src = {spreetail} height = {60} width = {170} alt = "olsson"/>
				<h2>Lincoln, Ne</h2>
				<h3>May 2022 - August 2022</h3>
				</div>
        <ul>
					<li>Designed and devolved feature that allowed clients to manipulate products’ original resell listings utilizing .NET, react, and SQL
          which saved Spreetail over $15,000 annually</li>
					<li>Enhanced UI & UX by designing and implementing interface elements such as menus, tabs, and widgets using react and CSS</li>
					<li>Created and demoed API feature that determined whether a client had proper authorization permissions and allowed them to
          alter BrandManager products and also tracked/logged status changes to products</li>
          <li>Upgraded databases and solutions to use and be compatible with newest technologies</li>
          <li>Led Scrum meetings for team members and interns to delegate tasks and ensure mutual understanding of work</li>
				</ul>
			</div>
		</div>
		<br/>	<br/>

		<div className="row">
			<div className="col-md-6">
			<div className = "box1">
				<h1>Resident Assistant</h1>
				</div>
				<br/>
				<div className = "inline">
				<img src = {unl} height = {70} width = {170} alt = "unl"/>
				<h2>Lincoln, Ne</h2>
				<h3>August 2021 - Present</h3>
				</div>
        <ul>
					<li>Foster the development of 30 residents in the Jeffery S. Raikes School of Computer Science and Management</li>
					<li>Create, market, and lead student centered hall programs to promote social, education, diversity, health, emotional,
            understanding and growth</li>
					<li>Communicate, correspond, and collaborate with on and off-campus offices such as counseling, student activities, campus
          security, and student advising</li>
          <li>Implement and enforce all college and campus living policies, promoting academic excellence, addressing student needs, and
          encouraging student involvements</li>
				</ul>
			</div>
			<div className="col-md-6">
			<div className = "box1">
				<h1>Information Security Intern</h1>
				</div>
				<br/>
				<div className = "inline">
				<img src = {ameritas} height = {70} width = {170} alt = "ameritas"/>
				<h2>Lincoln, Ne</h2>
				<h3>July 2021 - November 2021</h3>
				</div>
        <ul>
					<li>Actively engaged in security threat monitoring, attack methods, and incident reports, utilizing Microsoft Azure</li>
					<li>Surveilled alerts from enterprise security tools such as firewalls, anti-virus, data loss prevention, and vulnerability scanners</li>
					<li>Managed and prevented sensitive data and files from being compromised, through McAfee DLP</li>
          <li>Documented and conformed to processes related to security monitoring and detections, such as devolving SOPs</li>
          <li>Collaborated and communicated across departments to ensure appropriate processes, procedures, and tools are installed,
          monitored, and effectively operating and alerting</li>
				</ul>
			</div>
		</div>
	</div>
	<br/>	<br/>	<br/>
	</section>
  );
}

export default Experience;