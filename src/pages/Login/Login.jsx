import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/authContext';

export default function () {
    
    const authContext=useContext(AuthContext);
  return (
    <div>
    <Button
    onClick={()=> {
        authContext.setIsAuthenticated(true);
    }}
    >Giriş Yap</Button>

<Button
    onClick={()=> {
        authContext.setIsAuthenticated(false);
    }}
    >Çıkış Yap</Button>
    </div>
  );
}
