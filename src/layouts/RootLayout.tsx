import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
    const location = useLocation();

    const isHeroPage = location.pathname === "/";
    return (<>
        {!isHeroPage && <Navbar />}
        <main>
            <Outlet />
        </main></>
    )
}

export default RootLayout