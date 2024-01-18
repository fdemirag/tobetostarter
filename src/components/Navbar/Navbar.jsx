import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/authContext';

export default function Navbar() {

    const navigate = useNavigate();
    const authContext =useContext(AuthContext);
   
  return (
    <Menu>
        <Menu.Item onClick={()=>{navigate("/Homepage");}}>Ana Sayfa</Menu.Item>
        <Menu.Item onClick={()=>{navigate("/Posts");}}>Postlar</Menu.Item>
        
         {!authContext.isAuthenticated &&  <Menu.Item
         onClick={()=>{navigate("/Login");}}>Giriş Yap</Menu.Item>}
    </Menu>
  )
}
