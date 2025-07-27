import infoService from '../services/infos'


const Info = ({ infos }) => {
    return (
        <div>
            {infos.map(info => (
                <div key={info.id}>
                    <h2>{info.title}</h2>
                    <p>{info.content}</p>
                </div>
                ))}
        </div>
    )
}

export default Info