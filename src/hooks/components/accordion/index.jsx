import { Up, Down } from "./src/svg/index";

import { AccordinButton, AccordinImage, AccordinText, AccordionContainer } from "./styles";


export default function Accordion (){
    return(
        <AccordionContainer>
            <AccordinText>What is an accordion component</AccordinText>
            <AccordinButton>
            <AccordinImage src={Down}/>
            </AccordinButton>

        </AccordionContainer>            
    )
}