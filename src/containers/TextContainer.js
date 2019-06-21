import React, { useEffect, useState } from 'react'
import Data from './data'
import TextComponent from '../components/TextComponent'
import axios from 'axios'

export default function TextContainer() {
  const [textData, updateTextData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const serverData = axios.get('https://localhost:8083').then((serverData) => {
        updateTextData(serverData)
      }).catch((err) => {
        updateTextData(Data)
      })
    }
    fetchData()
  }, [])

  return (
    <>
      <div>Hello From {`Joe's`} coffee</div>
      <div>
        {textData.map((item, index) => {
          return (
            <TextComponent item={item} index={index} key={index}/>
          )
        })}
      </div>
    </>
  )
}