import logo from '../Images/kenz-logo.png';
import supportimage from '../Images/support.png';
import worldimage from '../Images/world.svg';
import profile from '../Images/profile.png'


const Header = () => {
    return (
      <div className="header-container">
        <div className="container">
        <div className="left-side mt-3">
        <img src={logo} alt="Logo" width={90} />
        </div>
        <div className="right-side">
          <img src={supportimage} alt="Support" />
          <img src={worldimage} alt="World" />
          <img src={profile} alt="Profile" />
        </div>
      </div>
      </div>
    );
  };
  
  export default Header;