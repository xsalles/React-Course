import PriceComposition from "../../.."
import "../../../../Price/styles.css"
import Check from "../../../../../assets/images/Check.png"
import Block from "../../../../../assets/images/Relume.png"

const mock = [
    1, 2, 3
]

function Benefits() {
    return (
        <div className="price-benefits">
            <img src={Check} alt="" />
            <p>Feature text goes here</p>
            
        </div>
    )
}

export default function PricePlan() {
    return (
        <div className="price-plan-container">
            <div className="price-block">
                <img src={Block} alt="" />
            </div>
            <div className="price-line"></div>
            
            
            <div className="type-plan">
                <h2>Basic Plan</h2>
                <h1>$19/mo</h1>
                <p>or $199 yearly</p>
                <div className="line"></div>
                <div className="price-includes">
                    <h1>Includes:</h1>
                    

                    {mock.map((elements) => {
                        return <Benefits key={elements} />
                        

                    })}
                    
                    <button>Get started</button>
                    


                    

                    
                </div>
            </div>
        </div>

    )
}

