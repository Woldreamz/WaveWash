import { IonButton, IonImg } from "@ionic/react";
import "./Walkthrough.css";
import { Link } from "react-router-dom";
interface ContainerProps { }

const Walkthrough: React.FC<ContainerProps> = () => {
  return (
    <div id="container">

      <IonImg src="/folded shirt.png"></IonImg>

      <h1 style={{width: "100%", textAlign: 'center', color: '#090A0A', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', padding: "20px"}}
      >We are here for you!</h1>

      <IonButton className="Btn" size="large" shape="round" routerLink="/Signup">Create Account</IonButton>

      <div>
        <span 
        style={{color: '#202325', fontSize: 16, fontFamily: 'Inter', fontWeight: '400'}}
        >Have an account? 
        </span>
        <span>
          <Link to="/login" style={{color: '#006A55', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', textDecoration: "none"}}>
          Log in</Link>
        </span>

      </div>

    </div>

  );
};

export default Walkthrough;