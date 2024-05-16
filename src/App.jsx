import "./App.css"

import Banner from "./components/Banner"

import adidas from "./assets/images/svg/adidas-svgrepo-com.svg"
import nike from "./assets/images/svg/nike-4-logo-svgrepo-com.svg"
import keyboard from "./assets/images/svg/keyboard-svgrepo-com.svg"
import camera from "./assets/images/svg/camera-svgrepo-com.svg"
import code from "./assets/images/svg/code-alt-svgrepo-com.svg"
import pen from "./assets/images/svg/pen-square-svgrepo-com.svg"


function App() {
  return (
      <body>
      
      <div className="Card">
        <h1>React Course</h1>
        <p>Front-End JavaScript</p>
      </div>
      
      <Banner title="Oi" description="Adidas" image={adidas}/>
      <Banner title="Oi" description="Camera" image={camera}/>
      <Banner title="Oi" description="nike" image={nike}/>
      <Banner title="Oi" description="keyboard" image={keyboard}/>
      <Banner title="Oi" description="code" image={code}/>
      <Banner title="Oi" description="pen" image={pen}/>
      
      </body>
      );
}

export default App;
