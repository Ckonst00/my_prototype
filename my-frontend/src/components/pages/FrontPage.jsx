import placeholderImg from '../../assets/placeholder-1920x1080.jpg'



const FrontPage = () => {
    const imgStyle = {
        width: '100%',
        maxWidth: '1920px',
        marginTop: '20px',
    }
    return (
        <div>
            <img src={placeholderImg} alt="placeholder img" style={imgStyle}/>
        </div>
    )
}


export default FrontPage