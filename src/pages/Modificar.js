import React, {useState, useEffect} from 'react'
import { Form, Input, Button, Divider } from 'antd';
import { buscarejercicio } from '../services'
import TextArea from 'antd/lib/input/TextArea';
import { Link } from 'react-router-dom';


const  ModificarEjercicio = (props) => {

    const [form] = Form.useForm()
    const [modificarEjercicios, setmodificarejercicio] = useState()

    useEffect(() => {
        buscarejercicio(props.match.params.id)
        .then(({data}) => setmodificarejercicio(data))
        .catch(error => console.log(error))
    }, [])

    if(!modificarEjercicios) return <p>louding</p>
    return (

    <div style={{margin:15}}>
        <Divider orientation='right'><h1>MODIFICAR 📝</h1></Divider>
            <div>
               <Form form={form}>
                    <Form.Item label="Codigo" name='codigo'>
                        <Input defaultValue={modificarEjercicios.ejercicio.codigo}/>
                    </Form.Item>
                    <Form.Item label="Titulo" name='titulo'>
                        <Input defaultValue={modificarEjercicios.ejercicio.titulo}/>
                    </Form.Item>
                    <Form.Item label="Musculo" name='musculo'>
                        <Input defaultValue={modificarEjercicios.ejercicio.musculo}/>
                    </Form.Item>
                    <Form.Item label="Explicacion" name='explicacion'>
                        <TextArea defaultValue={modificarEjercicios.ejercicio.explicacion}/>
                    </Form.Item>
                    <Form.Item label="Link" name='enlacevideo'>
                        <Input defaultValue={modificarEjercicios.ejercicio.enlacevideo}/>
                    </Form.Item>
                   <Form.Item>
                        <Button type="primary" htmlType="submit" block style={{width:100}}>
                            Modificar
                        </Button>
                    </Form.Item> 
                    <Form.Item>
                        <Button type="primary" block style={{width:100}}>
                            <Link to="/administrador">Cancelar</Link>
                        </Button>
                    </Form.Item>
                </Form> 
            </div>
        </div>
    )
}

export default ModificarEjercicio
