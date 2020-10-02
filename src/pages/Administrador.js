import React, {useState, useEffect} from 'react'
import { Tabs, Form, Input, Button, Card, Divider, Select } from 'antd';
import { altaejercicio, buscarejercicio, listarejercicio, borrarejercicio } from '../services'
import { Link } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';


const { TabPane } = Tabs

const Administrador = ()  => {
    
    const [form] = Form.useForm()
    const [listejercicios, setlistejercicios] = useState([])

    async function altaejercicioProcess(values) {
        altaejercicio(values)
        .then(data => console.log(data))
        .catch(error => console.log(error.response))
    }

    // funcion para buscar y delvolver un ejercicio
    async function buscarejercicioProcess(values){
        buscarejercicio(values)
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    //funcion para borrar un ejercicio
    async function eliminarejercicioProcess(values){
        console.log(values)
        borrarejercicio(values)
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        listarejercicio()
        .then(({data}) => setlistejercicios(data))
        .catch(error => console.log(error))
    }, [])
    
    return (
       <div style={{margin:15}}>
       <Divider orientation='right'>Administrador 👩🏻‍💻</Divider>
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Añadir" key="1">
                
                    <Form form={form} onFinish={altaejercicioProcess}>
                        <Form.Item label="Codigo" name='codigo'>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Titulo" name='titulo'>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Tren" name='tren'>
                            <Select>
                                <Select.Option name='tren' value='superior'>Superior</Select.Option>
                                <Select.Option neme='tren' value='inferior'>Inferior</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Musculo" name='musculo'>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Descripcion" name='explicacion'>
                            <TextArea />
                        </Form.Item>
                        <Form.Item label="Link" name='enlacevideo'>
                            <Link />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Añadir
                            </Button>
                        </Form.Item>
                    </Form>
                     
            </TabPane>
            
            <TabPane tab="Modificar" key="2">
                {listejercicios.map((lista, i) => (
                        <Card>  
                            <li className="travelcompany-input" key={i}>
                                <span className="input-label">key: {i} Codigo: {lista.codigo} Explicacion: {lista.explicacion}</span>  
                                <Button onClick={e => buscarejercicioProcess(lista._id)} block style={{marginTop:20}}><Link to={`/modificar/${lista._id}`}>Seleccionar</Link> </Button>
                            </li>
                        </Card> 
                ))}
            </TabPane>

            <TabPane tab="Eliminar" key="3">
                {listejercicios.map((lista, i) => (
                    <Card>
                        <li className="travelcompany-input" key={i}>
                            <span className="input-label">key: {i} Codigo: {lista.codigo} Explicacion: {lista.explicacion}</span>
                            <Button onClick={e => eliminarejercicioProcess(lista._id)} block style={{marginTop:20}}>Eliminar</Button>
                        </li>   
                    </Card> 
                ))}
            </TabPane>    
        </Tabs>
        </div> 
    )
    
}

export default Administrador