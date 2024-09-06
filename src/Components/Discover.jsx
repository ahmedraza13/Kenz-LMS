import discoverimage from "../Images/discover-image.avif";

function Discover() {
  return (
    <div className="discover-container container">
      <div className="row">
      
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <img
            src={discoverimage}
            alt="proimg"
            className="img-fluid"
            width={500}
          />
        </div>
        {/* Text content moved to the right on large screens */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1>Discover world of KI Academy expertise</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            aliquam facilis quo cumque, explicabo iure deleniti dolorem dolore
            enim illo nemo quos tempora dolorum beatae nostrum repellendus vel
            reiciendis voluptas.
          </p>
          <button className="button-black">Get Enrolled today</button>
        </div>
      </div>
    </div>
  );
}

export default Discover;
