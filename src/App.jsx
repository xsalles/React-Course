import "./App.css"
import "./components/Layout/index"

import Layout from "./components/Layout";

function App() {
  return (
    <body>
      
     <Layout 
     tag="react"
     title="Curso Senai"
     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
     buttonLeftTitle="Leia Mais"
     buttonRightTitle="Documentação"
     image
     />
    </body>
  );
}

export default App;