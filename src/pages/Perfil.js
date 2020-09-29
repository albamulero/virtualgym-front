import React from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function NotFound() {
  return (
    <div>
      <Avatar size={80} icon={<UserOutlined />} style={{marginLeft: 20, marginTop:30}}/>
      <h2 style={{marginLeft: 20, marginTop:30}}>Nombre: </h2>
      <h2 style={{marginLeft: 20 }}>Apellidos: </h2>
      <Button style={{marginLeft: 15 }}>Editar perfil</Button>
    </div>
  );
}

export default NotFound;

