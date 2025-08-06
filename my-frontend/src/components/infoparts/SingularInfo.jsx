import infoService from '../../services/infos'

const SingularInfo = ({ infos, user }) => {

    const newsStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
    }
    
    const handleDelete = (id, title, content) => {
        if (window.confirm(`Haluatko varmasti poistaa ${title}\n${content}`)) {
            infoService.remove(id)
        }
    }
    return (
        <div style={newsStyle}>
            {infos.map(info => (
                <div key={info.id}>
                    <h2>{info.title} {user ? (<button onClick={() => handleDelete(info.id, info.title, info.content)}>delete</button>) : (<div></div>)}</h2>
                    <p>{info.content}</p>
                    <p>Luonut: {info.user.username}</p>
                </div>
                ))}
        </div>
    )
}

export default SingularInfo