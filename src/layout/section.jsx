import GamesCards from "../components/GamesCard"
import StatsComp from "../components/StatsComp"
import league from "../assets/img/lol.png"
import counter from "../assets/img/counter.png"
import valorant from "../assets/img/valorant.png"
import teamfight from "../assets/img/teamfight.png"
import apex from "../assets/img/apex.png"
import fortnite from "../assets/img/fortnite.png"
import escape from "../assets/img/escape.png"
import destiny from "../assets/img/destiny.png"
import GamesComp from "../components/GamesComp"

function Section() {
    return (
        <>
            <section>
                <StatsComp />
                <GamesComp />
                <div className="container game-cards">
                    <GamesCards image={league} title={"League Of Legend"} alt={"league of legend pic"} />
                    <GamesCards image={counter} title={"Counter Strike"} alt={"Counter Strike pic"} />
                    <GamesCards image={valorant} title={"Valorant"} alt={"Valorant pic"} />
                    <GamesCards image={teamfight} title={"Team Fight"} alt={"Team fight pic"} />
                    <GamesCards image={apex} title={"Apex Legend"} alt={"apex pic"} />
                    <GamesCards image={fortnite} title={"Fortnite"} alt={"fortnite pic"} />
                    <GamesCards image={escape} title={"ESCAPE"} alt={"escape pic"} />
                    <GamesCards image={destiny} title={"Destiny 2"} badge={"Coming soon"} alt={"distiny 2 pic"} />
                </div>
            </section>
        </>
    )
}

export default Section