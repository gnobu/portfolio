import { Outlet } from 'react-router-dom'

import '~/styles/globals.css'
import NavigationBar from '../components/NavigationBar'

export default function Root() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}
