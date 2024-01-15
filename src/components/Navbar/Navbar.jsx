import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Navbar() {

    const navigate = useNavigate();

   
  return (
    <Menu>
        <Menu.Item onClick={()=>{navigate("/Homepage");}}>Ana Sayfa</Menu.Item>
        <Menu.Item onClick={()=>{navigate("/Posts");}}>Postlar</Menu.Item>
    </Menu>
  )
}
