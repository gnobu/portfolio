import { menuIcon } from "~/assets/icons"
import IconText from "./IconText"
import styles from '~/styles/navbar.module.css'

export default function NavigationBar() {
    return (
        <header className="p-blk-2">
            <div className="container flex al-center jst-btwn">
                <span className={`${styles.logo} f-s-6 f-w-6`}>ubong</span>
                <div className={`${styles.hamburger} rounded col-accent`}>
                    <IconText src={menuIcon} srcCls="f-s-7" />
                </div>
            </div>
        </header>
    )
}
