import { useState } from "react";
import Up from "./src/svg/Icon_angle-up.svg"
import Down from "./src/svg/Icon_angle-down.svg"

import { AccordionButton, 
         AccordionText, 
         AccordionContainer, 
         AccordionContent, 
         AccordionWrapper, 
         ContentText, 
         AccordionImage } from "./styles";

export default function Accordion() {

    const [ visible, setVisible] = useState(false)

    const handleAngle = visible == false ? Down : Up

    function HandleAccordion(){
        return (setVisible(!visible) 
        )
    }

    return (
        <AccordionWrapper>
            <AccordionContainer>
                <AccordionText>What is an accordion component</AccordionText>
                <AccordionButton onClick={HandleAccordion}>
                    <AccordionImage src={visible === false ? Down : Up} />
                </AccordionButton>
            </AccordionContainer>
            
            { visible && (

                <AccordionContent>
                    <ContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis nihil totam repellendus voluptates recusandae
                        voluptatum repudiandae velit nisi sunt numquam sapiente iusto maxime nemo, nam, eaque magni sequi esse?</ContentText>
                </AccordionContent>
            )}
        </AccordionWrapper>
    );
}