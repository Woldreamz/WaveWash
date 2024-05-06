import { IonHeader, IonImg } from '@ionic/react'
import React from 'react'
import howto from '../../assets/image/howtobanner.svg'

const HowTo = () => {
  return (
    <div style={{padding: '6%'}}>
        <IonImg src={howto} alt='How Wavewash works'/>
    </div>
  )
}

export default HowTo 