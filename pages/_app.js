import "../styles/globals.css";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Navbar2 from "../components/Navbar2";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      {/* <Navbar2/> */}
      <Navbar/>
      <div>
        <Component {...pageProps} />
      </div>
     <Footer/>
    </div>
  );
}

export default MyApp;
