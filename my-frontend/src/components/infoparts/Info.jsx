import { useState} from 'react'

import infoService from '../../services/infos'
import InfoForm from './InfoForm'

const Info = ({ user, infos, setInfos }) => {
    
  const [infoTitle, setInfoTitle] = useState('')  // for creating new info content
  const [infoContent, setInfoContent] = useState('')


  const handleNewInfo = async (event) => {
    event.preventDefault()
    const confirmation = window.confirm('Haluat varmasti lisätä uuden artikkelin?')
    try {
      const infoObject = {
        title: infoTitle,
        content: infoContent
      }
      if (confirmation) {
      const returnedInfo = await infoService.create(infoObject)
      console.log('Returned info from backend:', returnedInfo) 
      setInfos(infos.concat(returnedInfo))
      setInfoTitle('')
      setInfoContent('')
      }
    } catch (exception) {
      console.log('Adding a new info failed')
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
      
    </>
  )
}

export default Info