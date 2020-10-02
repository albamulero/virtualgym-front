import React, {useState, useEffect} from 'react'
import { Card, Divider } from 'antd';
import { bicepssuperior } from '../services'

const Calentamiento = ()  => {
  
  const [listejercicios, setlistejercicios] = useState([])

  useEffect(() => {
    bicepssuperior()
    .then(({data}) => setlistejercicios(data))
    .catch(error => console.log(error))
}, [])

  return(
    <div>
    <Divider orientation='right'><h1>Biceps superior 💪🏻</h1></Divider>
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

export default Calentamiento