import './Layout.css'

function Layout ({ children }) {
    return (
        <div className="px-40 layout">
            {children}
        </div>
    )
}

export default Layout