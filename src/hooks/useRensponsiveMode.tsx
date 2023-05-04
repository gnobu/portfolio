import { useEffect, useState } from 'react'

export default function useResposiveMode() {
    const [isSmMobile, setIsSmMobile] = useState(window.innerWidth <= 320)
    const [isMidMobile, setIsMidMobile] = useState(window.innerWidth <= 320)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 430)
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 430 && window.innerWidth <= 768)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

    useEffect(() => {
        function handleWindowResize() {
            setIsSmMobile(window.innerWidth <= 320)
            setIsMidMobile(window.innerWidth <= 375)
            setIsMobile(window.innerWidth < 430)
            setIsTablet(window.innerWidth >= 430 && window.innerWidth <= 768)
            setIsDesktop(window.innerWidth > 768)
        }
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return { isSmMobile, isMidMobile, isMobile, isTablet, isDesktop }
}
