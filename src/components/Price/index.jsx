import {PriceSection} from "./src/pattern/composition"
import {PricePlan} from "./src/pattern/composition"

export default function PriceComposition () {
    return (
        <div className="price-container">
            <PriceSection />
            <PricePlan />

        </div>
    )
}