import img1 from "../assets/img/img1.svg"
import img2 from "../assets/img/img2.svg"
import img3 from "../assets/img/img3.svg"
import img4 from "../assets/img/img4.svg"

function StatsComp() {
    return (
        <div className="container text-start py-5 stats">
            <h2>Personalized Stats and Insights Powered by Billions of Matches</h2>
            <div className="d-flex justify-content-between mt-4">
                <div className="d-flex justify-content-start gap-5">
                    <div className="bor">
                        <h3>240M+</h3>
                        <p className="mt-2">Players</p>
                    </div>
                    <div className="bor">
                        <h3>2B+</h3>
                        <p className="mt-2">Match Analyzed</p>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="" className="me-3" />
                        <img src={img2} alt="" className="me-3" />
                        <img src={img3} alt=""/>
                        <p className="mt-2">Fully Compliant</p>
                    </div>
                </div>

                <div>
                    <button className="down-btn d-flex ">
                        <img src={img4} alt="" className="me-1"/>
                        Download Now
                    </button>
                </div>

            </div>

        </div>
    );
}

export default StatsComp;
