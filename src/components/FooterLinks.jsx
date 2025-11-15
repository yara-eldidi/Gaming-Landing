import logoImg from "../assets/img/logo.png"
import img1 from "../assets/img/img1.svg"
import img2 from "../assets/img/img2.svg"
import img3 from "../assets/img/img3.svg"
import Links from "./Links"

function FooterLinks() {
    return (
        <>
            <div className="container footer-lay">
                <div>
                    <div className="d-flex mb-3 align-items-center gap-2 ">
                        <img src={logoImg} alt="TrackX Logo" />
                        <h4 className="m-0 me-4 text-light">AYUSHB</h4>
                    </div>
                    <button>
                        Download Now
                    </button>
                    <div className="footer-img">
                        <p className="mt-3">Fully Compliant</p>
                        <img src={img1} alt="" className="me-2" />
                        <img src={img2} alt="" className="me-2" />
                        <img src={img3} alt="" />
                    </div>
                </div>
                <Links title={"COMPANY"} link1={"About Us"} link2={"Partnerships"} link3={"Careers"} link4={"Branding"} link5={"FAQ"} />
                <Links title={"SOCIALS"} link1={"Facebook"} link2={"Twitter"} link3={"Instagram"} link4={"TikTok"} link5={"Our Discord"} />
                <Links title={"SUPPORTED GAMES"} link1={"League of Legends"} link2={"Counter-Strike 2"} link3={"VALORANT"} link4={"Teamfight Tactics"} link5={"Apex Legends"} />
            </div>
        </>
    )
}

export default FooterLinks