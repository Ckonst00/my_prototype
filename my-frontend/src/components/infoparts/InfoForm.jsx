

const InfoForm = ({
    handleNewInfo, 
    setInfoTitle, 
    setInfoContent,
    infoTitle,
    infoContent
    }) => {
    return (
        <div>
            <form onSubmit={handleNewInfo}>
            <h2>Luo uusi info</h2>
            <div>
                Otsikko <input type="text" value={infoTitle} onChange={({ target}) => setInfoTitle(target.value)}/>
            </div>
            <div>
                Aihe <input type="text" value={infoContent} onChange={({ target}) => setInfoContent(target.value)}/>
            </div>
            <button type="submit">Luo</button>
            </form>
        </div>
    )
}

export default InfoForm