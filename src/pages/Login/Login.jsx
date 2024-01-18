
import { Button } from 'semantic-ui-react'
import { useAuth } from '../../contexts/authContext';

export default function () {
    
  //  const authContext=useContext(AuthContext);
  const authContext = useAuth();
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
