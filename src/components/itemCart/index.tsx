import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonText } from '@ionic/react'
import React from 'react'
import FillCounter from '../counter/fill'
import trash from '../../assets/icon/trash.svg'
import RemoveModal from '../modals/remove_from';
import './index.css'

export interface ItemProp{
    img: any
    title: string
    price: number
    pcs: number
    modal: string
}

const ItemCart: React.FC<ItemProp> = ({img, title, pcs, price, modal}: ItemProp) => {
    function extractContent(index: number){
        const Items = Array.from(document.getElementsByClassName('items'))
        Items[index]
    }
  return (
    <div className='card-across-cart'>
        <IonGrid>
            <IonRow>
                <IonCol size='5'><img src={img} style={{height: '10rem'}}/></IonCol>
                <IonCol size='7' style={{padding: '22px 17px 0 10px'}}>
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
                <IonButton fill="clear" id={modal} style={{color: 'black', width: '83%', marginLeft: '-0.4rem'}}><IonIcon slot='start' icon={trash} />Remove from cart</IonButton>
                <RemoveModal img={img} title={title} modal={modal} pcs={pcs} price={price}/>    
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}

export default ItemCart