import { IonInput } from "@ionic/react";
import { FormEventHandler } from "react";



interface Props {
    
    // change: FormEventHandler<HTMLIonInputElement>
 }

 type InputProps = {
  type: any;
  placeholder: string;
  name: string;
  value: string;
  event?: React.FormEventHandler<HTMLIonInputElement>
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div>
      <IonInput className='inputText' class='.ion-margin' type={props.type} clearInput={true} fill="solid"  
      placeholder={props.placeholder} name={props.name} onChange={props.event} required></IonInput>
    </div>
  );
};

export default Input;
