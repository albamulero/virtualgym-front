import React, { useState, useContext } from "react"
import { Layout, Menu } from "antd"
import {
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  FormOutlined,
  LeftOutlined,
  RightOutlined,
  RiseOutlined,
  FallOutlined
} from "@ant-design/icons"
import { Link } from "react-router-dom"
import { logOut } from "../services"
import { MyContext } from "../context"
import SubMenu from "antd/lib/menu/SubMenu"

const { Header, Sider } = Layout

function LayoutApp({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const { clearCtxUser, user } = useContext(MyContext)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const logoutProcess = async () => {
    await logOut()
    clearCtxUser()
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu theme='dark' mode='inline'>
          <Menu.Item key='1' icon={<HomeOutlined />} >
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<RiseOutlined />}>
            <Link to='/calentamiento'>Calentamiento</Link>
          </Menu.Item>
          <Menu.Item key='3' icon={<RiseOutlined />}>
            <Link to='/completo'>Cuerpo completo</Link>
          </Menu.Item>
          <SubMenu key="4" title="Sin equipamiento" icon={<RiseOutlined />}>
          <SubMenu key='5' title="Parte Inferior">
            <Menu.Item key="6"><Link to='/cuadriceps'>Cuadriceps</Link></Menu.Item>
            <Menu.Item key="7"><Link to='/gemelos'>Gemelos</Link></Menu.Item>
            <Menu.Item key="8"><Link to='/bicepsInferior'>Biceps</Link></Menu.Item>
            <Menu.Item key="9"><Link to='/gluteos'>Gluteos</Link></Menu.Item>
          </SubMenu>
          <SubMenu key='10' title="Parte Superior">
            <Menu.Item key="11"><Link to='/bicepsSuperior'>Biceps</Link></Menu.Item>
            <Menu.Item key="12"><Link to='/triceps'>Triceps</Link></Menu.Item>
            <Menu.Item key="13"><Link to='/abdominales'>Abdominales</Link></Menu.Item>
            <Menu.Item key="14"><Link to='/pecho'>Pecho</Link></Menu.Item>
          </SubMenu>
          </SubMenu>
          <SubMenu key='15' title="Equipamiento" icon={<RiseOutlined />}>
            <Menu.Item key="16"><Link to='/pesas'>Pesas</Link></Menu.Item>
            <Menu.Item key="17"><Link to='/banco'>Banco</Link></Menu.Item>
            <Menu.Item key="18"><Link to='/barra'>Barra</Link></Menu.Item>
            <Menu.Item key="19"><Link to='/ligas'>Ligas</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key='20' icon={<FallOutlined />}>
            <Link to='/estiramientos'>Estiramientos</Link>
          </Menu.Item>
          <Menu.Item key='21' icon={<UserOutlined />}>
            <Link to='/perfil'>Perfil </Link>
          </Menu.Item>

          {!user && (
            <>
              <Menu.Item key='22' icon={<FormOutlined />}>
                <Link to='/signup'>Signup</Link>
              </Menu.Item>
              <Menu.Item key='23' icon={<LoginOutlined />}>
                <Link to='/login2'>Login</Link>
              </Menu.Item>
            </>
          )}
          
          {user && (
            <Menu.Item
              key='24'
              icon={<LogoutOutlined />}
              onClick={logoutProcess}
            >
              Logout
            </Menu.Item>
          )}
          {user && (
            <Menu.Item key='25' icon={<UserOutlined />}>
              <Link to='/profile'>{user.name}</Link>
            </Menu.Item>
          )}
          
          <Menu.Item key='26' icon={<UserOutlined />}>
              <Link to='/administrador'>Administrador</Link>
          </Menu.Item>

          <Header style={{ padding: "0 2rem", backgroundColor: "white" }}>
          {React.createElement(
            collapsed ? RightOutlined  : LeftOutlined ,
            {
              className: "trigger",
              onClick: toggle
            }
          )}
        </Header>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        
        {children}
       
      </Layout>
    </Layout>
  )
}

export default LayoutApp