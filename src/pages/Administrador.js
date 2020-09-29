import React from 'react'
import { Tabs, Form, Input, Button, Select, Cascader } from 'antd';
import { altaejercicio } from '../services'

let baseURL
const { TabPane } = Tabs

process.env.NODE_ENV === "production"
  ? (baseURL = "https://murmuring-reaches-95521.herokuapp.com") //Cambiar por mi heruku
  : (baseURL = "http://192.168.1.200:3000/api/ejercicio/alta")

const Administrador = ()  => {
    const [form] = Form.useForm()
    
    async function altaejercicioProcess(values) {
        await altaejercicio(values)

    }

    return (
        <div>
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Añadir" key="1">
                <Tabs defaultActiveKey="1" type="card" centered>

                    <TabPane tab="Calentamiento" key="1">
                        <Form form={form} onFinish={altaejercicioProcess}>
                            <Form.Item label="Codigo" name='codigo'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Titulo" name='titulo'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Descripcion" name='explicacion'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Link" name='enlacevideo'>
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Añadir
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    
                    <TabPane tab="Ejercicios" key="2">
                        <Form name="nest-messages" >
                            <Form.Item label="Tren" >
                                <Cascader
                                    options={[
                                        {
                                            name: 'tren',
                                            value: 'superior',
                                            label: 'Parte superior',
                                            children: [
                                                {
                                                    name: 'musculo',
                                                    value: 'abdominales',
                                                    label: 'Abdominales',
                                                },
                                                {
                                                    name: 'musculo',
                                                    value: 'pecho',
                                                    label: 'Pecho',
                                                },
                                                {
                                                    name: 'musculo',
                                                    value: 'triceps',
                                                    label: 'Triceps',
                                                },
                                                {
                                                    name: 'musculo',
                                                    value: 'biceps',
                                                    label: 'Biceps',
                                                },
                                            ],
                                        },
                                        {
                                            name: 'tren',
                                            value: 'inferior',
                                            label: 'Parte inferior',
                                            children: [
                                                {
                                                    name: 'musculo',
                                                    value: 'biceps',
                                                    label: 'Biceps',
                                                },
                                                {
                                                    name: 'musculo',
                                                    value: 'gluteos',
                                                    label: 'Gluteos',
                                                },
                                                {
                                                    name: 'musculo',
                                                    value: 'gemelos',
                                                    label: 'Gemelos',
                                                },
                                                {
                                                    name: 'musculo',
                                                    value: 'cuadriceps',
                                                    label: 'Cuadriceps',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form>
                                <Form.Item label="Codigo" name='codigo'>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Titulo" name='titulo'>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Descripcion" name='explicacion'>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Link" name='enlacevideo'>
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Añadir
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Form>
                    </TabPane>
                    
                    <TabPane tab="Estiramientos" key="3">
                        <Form>
                            <Form.Item label="Codigo" name='codigo'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Titulo" name='titulo'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Descripcion" name='expicacion'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Link" name='enlacevideo'>
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Añadir
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    
                    <TabPane tab="Equipamiento" key="4">
                        <Form.Item label="Selecciona">
                            <Select>
                                <Select.Option value="pesas" name='type'>Pesas</Select.Option>
                                <Select.Option value="banco" name='type'>Banco</Select.Option>
                                <Select.Option value="ligas" name='type'>Ligas</Select.Option>
                                <Select.Option value="barra" name='type'>Barra</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Codigo" name='codigo'>
                                <Input />
                        </Form.Item>
                        <Form.Item label="Titulo" name='titulo'>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Descripcion" name='explicacion'>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Link" name='enlacevideo'>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Añadir
                            </Button>
                        </Form.Item>
                     
                    </TabPane>
                    <TabPane tab="Cuerpo completo" key="5">
                        <Form>
                            <Form.Item label="Codigo" name='codigo'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Titulo" name='titulo'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Descripcion" name='explicacion'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Link" name='enlcevideo'>
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Añadir
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
            </TabPane>

            <TabPane tab="Modificar" key="2">
                <Tabs type="card" centered>

                    <TabPane tab="Calentamiento" key="1">
                       
                            <Button type="primary" htmlType="submit">
                                Modificar
                            </Button>
                        
                    </TabPane>

                    <TabPane tab="Ejercicios" key="2">
                        
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Modificar
                                </Button>
                            </Form.Item>
                            
                       
                    </TabPane>
                    
                    <TabPane tab="Estiramientos" key="3">
                        
                            <Button type="primary" htmlType="submit">
                                Modificar
                            </Button>
                        
                    </TabPane>
                    <TabPane tab="Equipamiento" key="4">
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Modificar
                            </Button>
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Cuerpo completo" key="5">
                        
                        <Button type="primary" htmlType="submit">
                            Modificar
                        </Button>
                           
                    </TabPane>
                </Tabs>
            </TabPane>

            <TabPane tab="Eliminar" key="3">
                <Tabs defaultActiveKey="1" type="card" centered >
                    <TabPane tab="Calentamiento" key="1">
                        
                            <Button type="primary" htmlType="submit">
                                Eliminar
                            </Button>
                       
                    </TabPane>
                    <TabPane tab="Ejercicios" key="2">
                
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Eliminar
                            </Button>
                        </Form.Item>
                    </TabPane>

                    <TabPane tab="Estiramientos" key="3">
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Eliminar
                            </Button>
                        </Form.Item>
                    </TabPane>

                    <TabPane tab="Equipamiento" key="4">
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Eliminar
                            </Button>
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Cuerpo completo" key="5">
                        
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Eliminar
                                </Button>
                            </Form.Item>
                       
                    </TabPane>
                </Tabs>
            </TabPane>
        </Tabs>
       </div> 
    )
    
}

export default Administrador