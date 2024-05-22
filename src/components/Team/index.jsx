import { Team } from "./pattern/composition";

export default function TeamComposition () {
    return (
        <div className="team-container">
            <TeamComposition />
        </div>
    )
}