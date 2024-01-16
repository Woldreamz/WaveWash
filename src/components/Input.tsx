import { IonInput } from "@ionic/react";



interface Props {
    type: any;
    placeholder: string;
 }

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <IonInput className='inputText' class='.ion-margin' type={props.type} clearInput={true} fill="solid"  placeholder={props.placeholder}></IonInput>
    </div>
  );
};

export default Input;
