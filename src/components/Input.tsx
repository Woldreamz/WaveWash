import { IonInput, IonLabel } from "@ionic/react";
import './input.css'


interface Props {
    
    // change: FormEventHandler<HTMLIonInputElement>
 }

 type InputProps = {
  type: any;
  placeholder: string;
  name: string;
  names?: string;
  types?: any;
  placeholders?: string;
  // value: string;
  event?: React.FormEventHandler<HTMLIonInputElement>
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div style={{ display: 'flex', gap: '2%' }}>
      <IonLabel className="floating">{props.placeholder}</IonLabel>
      <IonInput className='inputText' style={{ background: 'white', width: `${props.names? '50%': ''}` }} class='.ion-margin' type={props.type} clearInput={true} fill="solid"  
      placeholder={props.placeholder} name={props.name} onChange={props.event} required></IonInput>
      {props.names && <>
        <IonLabel className="floatings">{props.placeholders}</IonLabel>
        <IonInput className='inputText' style={{ background: 'white', width: `${props.names? '50%': ''}` }} class='.ion-margin' type={props.types} clearInput={true} fill="solid"  
                  placeholder={props.placeholders} name={props.names} onChange={props.event} required>
        </IonInput>
        </>
      }
    </div>
  );
};

export default Input;
