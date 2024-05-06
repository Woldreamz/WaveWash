import { IonButton } from "@ionic/react";

interface Props { 
    buttonName: string
    event?: React.MouseEventHandler<HTMLIonButtonElement>
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <div  className="divclass">
        <IonButton className="Btn" type="submit" expand="block" shape="round" onClick={props.event}>{props.buttonName}</IonButton>
    </div>
  );
};

export default Button;