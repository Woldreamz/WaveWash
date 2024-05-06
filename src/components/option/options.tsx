import machbox from '../../assets/image/machbox.svg'
import profbox from '../../assets/image/profbox.svg'
import locatbox from '../../assets/image/locatbox.svg'
import histbox from '../../assets/image/histbox.svg'
import setbox from '../../assets/image/setbox.svg'
import notifbox from '../../assets/image/notifbox.svg'
import OptionBox from '.';
import './style.css'


const OptionBanner: React.FC = () => {

  return (
    <div className='option-banner'>
        <OptionBox route='/tabs/services' src={machbox} alt='new wash' title='New Wash' ></OptionBox>
        <OptionBox route='/track' src={locatbox} alt='track order' title='Track Order' ></OptionBox>
        <OptionBox route='/tabs/settings/notifications' src={notifbox} wt='4.4rem' alt='Notification' title='Notification' ></OptionBox>
        <OptionBox route='/tabs/settings/orders' src={histbox} wt='3.2rem' alt='order history' title='Order History' ></OptionBox>
        <OptionBox route='/profileupdate' src={profbox} wt='3.5rem' alt='profile' title='Profile' ></OptionBox>
        <OptionBox route='/tabs/settings' src={setbox} wt='3rem' alt='settings' title='Settings' ></OptionBox>
    </div>
  );
};

export default OptionBanner;
 