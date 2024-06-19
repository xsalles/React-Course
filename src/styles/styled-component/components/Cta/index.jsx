import React from "react"
import { CtaButtonOne, CtaButtonTwo, CtaContainer, CtaContainerButton, CtaContent,  CtaDescription, } from "./styles"

export default function Cta(props) {
    return (
        <CtaContainer>
        <CtaContent>{props.title}</CtaContent>
        <CtaDescription>{props.description}</CtaDescription>
        <CtaContainerButton>
        <CtaButtonOne>{props.button}</CtaButtonOne>
        <CtaButtonTwo>{props.button}</CtaButtonTwo>
        </CtaContainerButton>
        </CtaContainer>
    )
}