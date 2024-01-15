import { IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonText } from '@ionic/react'
import React from 'react'
import FillCounter from '../counter/fill'
import RemoveModal from '../modals/remove_from';
import './index.css'

export interface ItemProp{
    img: any
    title: string
    price: number
    pcs: number
    modal: string
}

const RemoveCart: React.FC<ItemProp> = ({img, title, pcs, price, modal}: ItemProp) => {
    function extractContent(index: number){
        const Items = Array.from(document.getElementsByClassName('items'))
        Items[index]
    }
  return (
    <div className='card-remove-cart'>
        <IonGrid>
            <IonRow>
                <IonCol size='4'><img src={img} style={{height: '6rem'}}/></IonCol>
                <IonCol size='8' style={{padding: '22px 17px 0 0'}}>
                <div className='mini-wrap'>
                    <h2 className='text-weight thick-text' style={{margin: 0}} >{title}</h2>
                    <IonText>{pcs}pcs</IonText>
                    <IonRow>
                        <IonCol size='7.5' style={{padding: 0}}>
                            <IonText className='text-weight thick-text'>N{price}</IonText>
                        </IonCol>
                        <IonCol size='4.5' style={{padding: 0}}>
                            <FillCounter />
                        </IonCol>
                    </IonRow>
                </div>    
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}

export default RemoveCart