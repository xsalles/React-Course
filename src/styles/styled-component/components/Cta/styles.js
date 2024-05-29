import styled from "styled-components";
import EmptyImage from "../../../../assets/images/Image.svg"


export const CtaContainer = styled.div`
    display: flex;
    width: 1440px;
    height: 973px;
`

export const CtaTitle = styled.h2`
    display: flex;
    justify-content: center;
    text-align: left;
    margin-top: 112px;
    width: 512px;
    height: 112px;
    margin-right: 184px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
`

export const CtaContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    width: 208px;
    height: 64px;
    margin-top: 24px;
    gap: 16px;
    
`

export const CtaDescription = styled.p`
    display: inline;
    text-align: left;
    margin-top: 112px;
    width: 616px;
    height: 81px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const CtaButton1 = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 48px;
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
`

export const CtaButton2 = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 48px;
    background-color: white;
    border: 1px solid black;
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const CtaImage = styled.div`
   display: flex;
   align-items: left;
   justify-content: center;
   background-image: url(${EmptyImage});
   width: 1312px;
   height: 500px;
   margin-top: auto;
   margin-right: 500px;
`