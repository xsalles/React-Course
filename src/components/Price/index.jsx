import {PriceSection} from "./src/pattern/composition"
import {PricePlan} from "./src/pattern/composition"

const benefits = [
    1, 2, 3
]
export default function PriceComposition () {
    return (
        <div className="price-container">
            <PriceSection />

            {benefits.map((elements) => {
                        return <PricePlan key={elements} />

                    })}

        </div>
    )
}