import "./App.css"

import React from "react";


import Nav from "./mui/components/MainPage/nav";
import SignIn from "./mui/components/MainPage/sign";
import Footer from "./mui/components/MainPage/footer";




function App() {
  return (
    <body>
       <Nav />
       <SignIn />
       <Footer />
    </body>
  );
}

export default App;