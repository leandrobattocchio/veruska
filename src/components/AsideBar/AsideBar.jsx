import { WhatsAppIcon } from '../Icons/Icon'

function AsideBar () {
    return (
        <div
            className='fixed right-7 top-2/4 cursor-pointer hover:scale-110 transform transition duration-300 p-2 rounded-full'
            style={{ backgroundColor: '#dddddd' }}
        >
            <WhatsAppIcon />
        </div>
    )
}

export default AsideBar