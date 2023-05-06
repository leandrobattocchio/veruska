import { WhatsAppIcon } from '../Icons/Icon'
import './AsideBar.css'

function AsideBar () {
    return (
        <div
            className='aside-bar fixed right-3 top-2/4 cursor-pointer hover:scale-110 transform transition duration-300 p-2 rounded-full'
            style={{ backgroundColor: '#dddddd' }}
        >
            <WhatsAppIcon />
        </div>
    )
}

export default AsideBar