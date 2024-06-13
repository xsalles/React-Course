import { useState } from "react";
import AngleDown from "./src/svg/AngleDown.png"
import AngleUp from "./src/svg/Icon_angle-up.svg"
import { FaqWrapper, FaqContainer, FaqButton, FaqContent, FaqContentButton, FaqContentContainer, FaqContentDescription, FaqContentTitle, FaqDescription, FaqImage, FaqQuestion, FaqQuestionContainer, FaqQuestionTitle, FaqTitle, ContentText } from "./styles";


export default function Faq() {

    const [visible, setVisible] = useState(false)

    const handleAngle = visible == false ? AngleDown : AngleUp

    function HandleAngle() {
        return (setVisible(!visible)
        )
    }

    return (
        <FaqWrapper>
            <FaqContainer>

                <FaqTitle><h1>FAQs</h1></FaqTitle>
                <FaqDescription><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.</p></FaqDescription>
                <FaqQuestionContainer>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton onClick={HandleAngle}>
                            <FaqImage  />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton >
                            <FaqImage  />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton >
                            <FaqImage  />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton >
                            <FaqImage  />
                        </FaqButton>
                    </FaqQuestion>
                    <FaqQuestion><FaqQuestionTitle>Question text goes here</FaqQuestionTitle>
                        <FaqButton >
                            <FaqImage  />
                        </FaqButton>
                    </FaqQuestion>

                </FaqQuestionContainer>
                <FaqContent>
                    <FaqContentTitle>Still have a question?</FaqContentTitle>
                    <FaqContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </FaqContentDescription>
                    <FaqContentButton>Contact</FaqContentButton>
                </FaqContent>
            </FaqContainer>
            
            {visible && (

                <FaqContentContainer>
                    <ContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis nihil totam repellendus voluptates recusandae
                        voluptatum repudiandae velit nisi sunt numquam sapiente iusto maxime nemo, nam, eaque magni sequi esse?</ContentText>
                </FaqContentContainer>
            )}
        
        </FaqWrapper>
    )
}