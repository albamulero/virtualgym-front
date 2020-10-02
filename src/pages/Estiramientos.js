import React, {useState, useEffect} from 'react'
import { Card, Divider } from 'antd';
import { estiramientos } from '../services'

const Estiramientos = ()  => {
  
  const [listejercicios, setlistejercicios] = useState([])

  useEffect(() => {
    estiramientos()
    .then(({data}) => setlistejercicios(data))
    .catch(error => console.log(error))
}, [])

console.log(listejercicios)
  
  return(
    <div>
    
    <Divider orientation='right'>Estiramientos 🙆🏻‍♀️</Divider>
    
      {listejercicios.map((lista, i) => (
        <Card>  
          <li className="travelcompany-input" key={i}>
            <span className="input-label">{lista.titulo} <br /> Explicacion: {lista.explicacion} </span> <br /><br />
            <iframe width='260' height='315' src={lista.enlacevideo}>Link</iframe>
          </li>
        </Card> 
      ))}
    </div> 

  )

}

export default Estiramientos

