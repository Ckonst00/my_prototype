

const SingularInfo = ({ infos }) => {

    const newsStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
    }
    
    return (
        <div style={newsStyle}>
            {infos.map(info => (
                <div key={info.id}>
                    <h2>{info.title}</h2>
                    <p>{info.content}</p>
                </div>
                ))}
        </div>
    )
}

export default SingularInfo