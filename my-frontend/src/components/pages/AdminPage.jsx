import Info from "../infoparts/Info"



const AdminPage = ({ user, infos, handleDelete, setInfos }) => {

    const wordLimit = 10

    const limitWords = (text, limit) => {
    const words = text.split(" ")
    const shortened = words.slice(0, limit).join(" ")
    return words.length > limit ? shortened + "..." : shortened}

    return (
        <div style={{ padding: "6rem"}}>
            {infos.map(info => 
            <div id={info.id}>
                <h1>{info.title}<button onClick={() => handleDelete(info.id, info.title, info.content)}>poista</button></h1>
                <p>{limitWords(info.content, wordLimit)}</p>
            </div>
        )}
        <Info user={user} infos={infos} setInfos={setInfos} />
        </div>
    )
}







export default AdminPage