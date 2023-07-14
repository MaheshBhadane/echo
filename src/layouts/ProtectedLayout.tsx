import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function ProtectedLayout() {

    return (<>
        <main>
            <Navbar />
            <Outlet />
        </main></>
    )
}

export default ProtectedLayout