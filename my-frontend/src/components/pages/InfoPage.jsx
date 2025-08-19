import { Link } from "react-router-dom"

const InfoPage = ({ infos }) => {
    const wordLimit = 25

    const limitWords = (text, limit) => {
    const words = text.split(" ")
    const shortened = words.slice(0, limit).join(" ")
    return words.length > limit ? shortened + " ..." : shortened}

  return (
    <div className="ui container" style={{ marginTop: "5rem" }}>
      <div className="ui padded grid">
        <div className="sixteen wide column">
          <div className="ui message">
            <h1 className="ui huge header">Ajankohtaisia uutisia</h1>
            <p className="lead">
              This is a simple example to show the off-canvas layout pattern
              in Semantic-UI. You could check out more wonderful effects here.
            </p>
          </div>

          <div className="ui hidden divider"></div>

        <div className="ui three column stackable grid">
            {infos.map((info) => (
              <div className="column" key={info.id}>
                <h1 className="ui header">{info.title}</h1>
                <p>
                  {limitWords(info.content, wordLimit)}
                </p>
                <Link to={`/ajankohtaista/${info.id}`} className="ui small basic button">
                    Lue lisää &raquo;
                </Link>
              </div>))}
        </div>

          <div className="ui hidden divider"></div>
          <div className="ui divider"></div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
