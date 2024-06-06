import { useState } from "react";
import AngleDown from "./src/svg/Icon_angle-down.svg"
import AngleUp from "./src/svg/Icon_angle-up.svg"
import { FaqContainer, FaqDescription, FaqSection, FaqTitle } from "./styles";

export default function Faq(){
    return(
        <FaqContainer>
             <FaqSection>
                <FaqTitle><h1>FAQs</h1></FaqTitle>
                <FaqDescription><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique.</p></FaqDescription>
             </FaqSection>

        </FaqContainer>
    )
}