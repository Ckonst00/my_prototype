import { useState, useEffect } from 'react'
import SingularInfo from './SingularInfo'
import infoService from '../../services/infos'
import InfoForm from './InfoForm'

const Info = ({ user }) => {
    
  const [infos, setInfos] = useState([])  //Get all the infos
  const [infoTitle, setInfoTitle] = useState('')  // for creating new info content
  const [infoContent, setInfoContent] = useState('')

  useEffect(() => {
    infoService.getAll().then(infos => setInfos(infos)
    )
  }, [])

  const handleNewInfo = async (event) => {
    event.preventDefault()

    try {
      const infoObject = {
        title: infoTitle,
        content: infoContent
      }
      const returnedInfo = await infoService.create(infoObject)
      console.log('Returned info from backend:', returnedInfo) 
      setInfos(infos.concat(returnedInfo))
      setInfoTitle('')
      setInfoContent('')
    } catch (exception) {
      console.log('Adding a new info failed')
    }
  }
  const handleDelete = async (id, title, content) => {
    if (window.confirm(`Haluatko varmasti poistaa: ${title}\n${content}`)) {
      await infoService.remove(id)
      setInfos(infos.filter(info => info.id !== id))
    }
  }

  return (
    <>
      {user && (
        <InfoForm 
          handleNewInfo={handleNewInfo} 
          infoTitle={infoTitle} 
          setInfoTitle={setInfoTitle} 
          infoContent={infoContent} 
          setInfoContent={setInfoContent} 
        />
      )}
      <SingularInfo infos={infos} user={user} handleDelete={handleDelete}/>
    </>
  )
}


export default Info