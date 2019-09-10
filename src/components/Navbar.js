import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
// icons
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
// logo imageß
import logo from "../images/logo.svg"

const Navbar = () => {
  // set up the hook for useState, initally false
  const [isOpen, setNav] = useState(false)
  // toggle for the hamburger menu button
  const toggleNav = () => {
    // togle isOpen state
    setNav(isOpen => !isOpen)
  }
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <Link to="/">
              <img src={logo} alt="backroads logo" />
            </Link>
            <button
              type="button"
              className={styles.logoBtn}
              onClick={toggleNav}
            >
              <FaAlignRight className={styles.logoIcon} />
            </button>
          </div>
          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
          <div className={styles.navSocialLinks}>
            {socialIcons.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
