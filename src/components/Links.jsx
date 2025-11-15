function Links({title,link1,link2,link3,link4,link5}) {
    return (
        <>
            <div className="footer-link">
                <h3>{title}</h3>
                <ul>
                    <li><a href="#">{link1}</a></li>
                    <li><a href="#">{link2}</a></li>
                    <li><a href="#">{link3}</a></li>
                    <li><a href="#">{link4}</a></li>
                    <li><a href="#">{link5}</a></li>
                </ul>
            </div>
        </>
    )
}

export default Links