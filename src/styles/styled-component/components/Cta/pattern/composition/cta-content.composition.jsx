import "../../styles"

import EmptyImage from "../../../../../../assets/images/Image.svg"

export default function CtaContent (props) {
    return(
        <div className="cta-title">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            
            <div>

            </div>
        </div>
        

    
    )
}