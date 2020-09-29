import React from "react"
import { Form, Input, Button, Divider, Row, Col } from "antd"
import { signup } from "../services"

let baseURL

const Signup = ({ history }) => {
  const [form] = Form.useForm()

  async function signupProcess(values) {
    await signup(values)
    history.push("/login")
  }
  return (
    <div>
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
          <Button type='primary' htmlType='submit'>
            Registrate
          </Button>
        </Form.Item>
      </Form>
      
      <Divider>Or</Divider>
      <br />
      <Row gutter={16}>
        <Col span={12}>
          <Button type='primary' block>
            <a href={`${baseURL}/auth/facebook`}>Entrar con Facebook</a>
          </Button>
        </Col>
        <Col span={12}>
          <Button type='primary' block>
            <a href={`${baseURL}/auth/google`}>Entrar con Google</a>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Signup
