import kenzlogo from "../Images/kenz-logo.png";

function Footer() {
  return (
    <div className="footer-container p-4 mt-5">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <img src={kenzlogo} alt="logo" width={90} />
          <h3>Do you need help with anything?</h3>
          <input type="text" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <h3>More Information</h3>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
        <h3>More Information</h3>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
        <h3>More Information</h3>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
          <p>Point 01</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
