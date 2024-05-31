import "../../styles"

export default function CtaButton (props) {
    return (
        <div className="cta-button">
            <button>{props.button}</button>
        </div>
    )
}