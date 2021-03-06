import React, { useState } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../css/navbar.module.css'
import { IoIosMenu } from 'react-icons/io'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'


const Navbar = () => {
    // if it was false, the moment I run toggleNav, state isOpen equals true 
    //and if not then the other way around
    const [isOpen, setNav] = (useState(false))
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    // when I hit the button I flip the state
    }
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        <IoIosMenu className={styles.logoIcon} />
                    </button>
                </div>
                <ul className={isOpen?`${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
                    {links.map((item, index) => {
                        return(<li key={index}>
                                    <AniLink fade to={item.path}>
                                    {item.text}
                                    </AniLink>
                                </li>)
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </a>
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
