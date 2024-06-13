import * as S from "./styles"
import {useState} from "react"
import DropdownMenu from "../DropDownMenu";
import { Link } from "react-router-dom";

export default function Navbar (props) {
    
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        return setOpen(!open)
    }

    const listPages = [
        {
          title: "Page one",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page Two",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page Three",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page Four",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
      ];

    return(
        <S.Container>
            <S.Logo>Logo</S.Logo>
            <S.Nav>
                <S.Link>
                  <Link to="/teams">Teams</Link>
                </S.Link>
                <S.Link>
                  <Link to="/contact">Contact</Link>
                </S.Link>
                <S.Link>
                  <Link to="/faq">Faq</Link>
                </S.Link>
                <S.Link onClick={handleMenu}>Pages</S.Link>
                {
                    open && <DropdownMenu pages={listPages} /> 
                }
                <S.ContainerButton>
                <S.Button>Button</S.Button>
                <S.Button bgColor="black">Button</S.Button>
                </S.ContainerButton>
            </S.Nav>
        </S.Container>

    )
}