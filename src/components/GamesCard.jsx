function GamesCards({ image, title, alt, badge }) {
    return (
        <div>
            <div className="game-card">
                <img src={image} alt={alt} />
                <div className="d-flex justify-content-between">
                    <span>{title}</span>
                    <span className="badge align-self-center">{badge}</span>
                </div>

            </div>
        </div>
    )
}
export default GamesCards
