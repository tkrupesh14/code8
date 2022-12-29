import "../styles/globals.css";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="grid place-content-center h-screen ">
            Persist Loading...
          </div>
        }
        persistor={persistor}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
