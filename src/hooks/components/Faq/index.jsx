import { useState } from "react";
import AngleDown from "./src/svg/AngleDown.png"
import AngleUp from "./src/svg/Icon_angle-up.svg"
import { FaqImage, FaqButton, FaqContainer, FaqDescription, FaqQuestion, FaqQuestionContainer, FaqQuestionTitle, FaqTitle, FaqWrapper, FaqContent, FaqContentTitle, FaqContentDescription, FaqContentButton } from "./styles";

export default function Faq() {
    return (
        <FaqWrapper>
            <FaqContainer>

                <FaqTitle><h2>FAQs</h2></FaqTitle>
                <FaqDescription><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.</p></FaqDescription>
                <FaqQuestionContainer>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton>
                            <FaqImage src={AngleDown} />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton>
                            <FaqImage src={AngleDown} />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton>
                            <FaqImage src={AngleDown} />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton>
                            <FaqImage src={AngleDown} />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton>
                            <FaqImage src={AngleDown} />
                        </FaqButton>
                    </FaqQuestion>
                    
                </FaqQuestionContainer>
                <FaqContent>
                        <FaqContentTitle>Still have a question?</FaqContentTitle>
                        <FaqContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </FaqContentDescription>
                        <FaqContentButton>Contact</FaqContentButton>
                    </FaqContent>
            </FaqContainer>
        </FaqWrapper>
    )
}