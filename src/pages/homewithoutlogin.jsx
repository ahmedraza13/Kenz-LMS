import Header from "../components/Header.jsx";
import LMSBanner from "../components/LMSBanner.jsx";
import Discover from "../components/Discover.jsx";
import Footer from "../components/Footer.jsx";

function HomeWithOutLogin() {
  return(
    <>
       <Header/>
       <LMSBanner/>
       <Discover/>
       <Footer/>
       </>
    )
}

export default HomeWithOutLogin;