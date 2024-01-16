import { IonButton } from "@ionic/react";

interface Props { 
    buttonName: string
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <div  className="divclass">
        <IonButton type="submit" expand="block" shape="round">{props.buttonName}</IonButton>
    </div>
  );
};

export default Button;