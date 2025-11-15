function GamesComp(){
    return(
        <>
        <div className="container">
            <div className="game-head">
                <h3>All Games</h3>
                <select name="option" id="option">
                    <option value="1">Sort by popularity</option>
                    <option value="2">Newest releases</option>
                    <option value="3">Upcoming games</option>
                    <option value="4">Free to play</option>
                </select>
            </div>
        </div>
        </>
    )
}

export default GamesComp