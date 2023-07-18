import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'

const ProtectedLayout = () => {

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default ProtectedLayout