import './PictureOfMe.css';
import nbImage from './PictureOfMe.jpg';

function PictureOfMe() {
  return (
    <section id = "me">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4">
          <div className="PictureOfMe overflow-hidden">
            <img src={nbImage} alt="logo" className="w-100 h-100 object-fit-cover"/>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default PictureOfMe;
