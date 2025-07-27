import { useState, useEffect } from 'react'
import Info from './components/Info'
import infoService from './services/infos'


function App() {

  const [infos, setInfos] = useState([])

  useEffect(() => {
    infoService.getAll().then(infos => setInfos(infos)
    )
  }, [])

  return (
    <>
    <div>tavaraa -- App</div>
    <Info infos={infos} />
    </>
  )
}

export default App
