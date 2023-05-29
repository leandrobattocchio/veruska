import './Layout.css'

function Layout ({ children }) {
    return (
        <div className="md:px-36 px-5 md:py-24 py-8">
            {children}
        </div>
    )
}

export default Layout