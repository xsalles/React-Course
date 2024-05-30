import { CtaContainer, CtaContent, CtaTitle, CtaDescription, CtaButton1, CtaButton2, CtaContainerButtons, CtaImage, } from "./styles"



export default function Cta(props) {
    return (
        <CtaContainer >
            <CtaTitle><h2>{props.title}</h2></CtaTitle>
            
            <CtaDescription><p>{props.description}</p>
                <CtaContainerButtons>
                    <CtaButton1><a>{props.button}</a></CtaButton1>
                    <CtaButton2><a>{props.button}</a></CtaButton2>
                </CtaContainerButtons>
                   



            </CtaDescription>




        </CtaContainer>


    )
}