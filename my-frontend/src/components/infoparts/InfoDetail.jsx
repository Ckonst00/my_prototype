import { useParams } from "react-router-dom"


const InfoDetails = ({ infos }) => {
    const id = useParams().id
    
    const info = infos.find(i => i.id === Number(id))

    return (
        <div>
            <h2>{info.title}</h2>
            <p>{info.content}</p>
        </div>
    )
}

export default InfoDetails