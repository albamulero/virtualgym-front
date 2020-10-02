import React from "react"
import { Form, Input, Button, Divider } from "antd"
import { signup } from "../services"

let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "https://virtualgymreact.herokuapp.com/api")
  : (baseURL = "http://localhost:3000")

const Signup = ({ history }) => {
  const [form] = Form.useForm()

  async function signupProcess(values) {
    console.log(values)
    signup(values) 
    .then(data => console.log(data))
    .catch(error => console.log(error))
    history.push("/login")
  }
  return (
    <div style={{margin:15}}>
      <Divider orientation='right'>REGISTRO 📝</Divider>
      <Form layout='vertical' name='basic' form={form} onFinish={signupProcess}>
        <Form.Item
          label='Nombre'
          name='nombre'
          rules={[{ required: true, message: "Por favor, inserte su nombre!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Apellidos'
          name='apellidos'
          rules={[{ required: true, message: "Por favor, inserte su apellido!" }]}
        >
          <Input />
        </Form.Item>
        

        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: "Por favor, inserte su email!"  }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: "Por favor, inserte su contraseña!"  }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Registrate
          </Button>
        </Form.Item>
      </Form>
      
      <Divider>O</Divider>
        <Button type='primary' block>
          <a href={`${baseURL}/auth/google`}>Entrar con Google</a>
        </Button>
       
    </div>
  )
}

export default Signup
