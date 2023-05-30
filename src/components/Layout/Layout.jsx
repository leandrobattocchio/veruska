import { useLocation } from 'react-router-dom'
import './Layout.css'

function Layout ({ children }) {

    const { pathname } = useLocation()

    return (
        <div className={`md:px-36 px-5 md:py-24 py-8 ${pathname === '/' ? 'gradiente' : ''}`}>
            {children}
        </div>
    )
}

export default Layout