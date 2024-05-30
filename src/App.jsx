import "./App.css"
import Square from "./styles/styled-component/components/Square";



import Cta from "./styles/styled-component/components/Cta/index"
import Section from "./components/Team/pattern/composition/team-section.composition";
import Main from "./components/Team/pattern/composition/team-main.composition"
import PriceSection from "./components/Price/src/pattern/composition/price-section.composition"
import PricePlan from "./components/Price/src/pattern/composition/price-content.composition";
import EmptyImage from "./assets/images/Image.svg"

function App() {
  return (
    <body>
      <Cta title="Medium length heading goes here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        button="Button" imagem={EmptyImage}>
      </Cta>
      
    </body>
  );
}

export default App;