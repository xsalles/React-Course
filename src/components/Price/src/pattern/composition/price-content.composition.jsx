import "../../../../Price/styles.css"

export default function PricePlan () {
    return(
        <div className="price-plan-container">
            <div className="type-plan">
                <h2>Basic Plan</h2> 
                <div className="price-plan">
                    <h1>$19/mo</h1>
                    <div className="price-yearly">
                        <p>or $199 yearly</p>
                        <div className="line"></div>
                        <div className="price-includes">
                        <h1>Includes:</h1>
                        <p>Feature text goes here</p>
                        <p>Feature text goes here</p>
                        <p>Feature text goes here</p>
                        <button>Get started</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
