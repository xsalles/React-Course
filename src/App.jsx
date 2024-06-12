import "./App.css"
import DropdownMenu from "./hooks/components/DropDownMenu";
import Faq from "./hooks/components/Faq";
import Navbar from "./hooks/components/Navbar";


function App() {

      const pages = [
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
      ]

  return (
    <body>
      <Navbar/>
      
    </body>
  );
}

export default App;