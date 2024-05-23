import PriceComposition from "../Price";
import { Team } from "./pattern/composition";
import { PriceSection } from "./pattern/composition/price-section.composition";

export default function TeamComposition () {
    return (
        <div className="team-container">
            
            <PriceComposition />
        </div>
    )
}