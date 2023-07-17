import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function ProtectedLayout() {

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