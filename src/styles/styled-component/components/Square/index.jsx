
import { SquareContainer, SquareImage, SquareLink, SquareTitle } from "./styles";



export default function Square(props) {
    return(
        <SquareContainer borderStyles={props.borderStyles} title={props.title}>
            <SquareLink href="https://styled-components.com/" target="_blank">{props.borderStyles ? props.borderStyles : "Adicione a prop no Square"}</SquareLink>
        </SquareContainer >
        
       

        

        
    )
}
    