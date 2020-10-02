import React, { useContext } from "react"
import { Form, Input, Button, Divider } from "antd"
import { login } from "../services"
import { MyContext } from "../context"

let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "https://virtualgymreact.herokuapp.com/api")
  : (baseURL = "http://192.168.1.200:3000/api")

const Login = () => {
  const [form] = Form.useForm()
  const { setCtxUser } = useContext(MyContext)

  async function loginProcess(values) {
    const {
      data: { user }
    } = await login(values)
    delete user.password
    delete user.hash
    delete user.salt
    setCtxUser(user)
  }
  return (
    <div style={{margin:15}}>
      <Divider orientation='right'>ENTRAR 🚪</Divider>
      <Form layout='vertical' name='basic' form={form} onFinish={loginProcess}>
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
            Entrar
          </Button>
        </Form.Item>
      </Form>

      
    </div>
  )
}

export default Login
