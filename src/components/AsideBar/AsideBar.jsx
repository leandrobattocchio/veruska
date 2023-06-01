import { Link } from 'react-router-dom'
import { WhatsAppIcon } from '../Icons/Icon'
import './AsideBar.css'

function AsideBar () {
    return (
        <div
            className='aside-bar fixed md:right-3 md:top-2/4 cursor-pointer hover:scale-110 transform transition duration-300 p-2 rounded-full'
            style={{ backgroundColor: '#2bbb2f' }}
        >
            <Link to={'https://api.whatsapp.com/send?phone=5492604547200'} target='_blank'>
            <WhatsAppIcon />
            </Link>
        </div>
    )
}

export default AsideBar