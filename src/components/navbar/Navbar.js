import React, { useState } from "react"
import { connect } from "react-redux"
import { startLogout } from "../../stores/auth/actions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faBell, faEnvelope, faCaretDown, faCog, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { CSSTransition } from "react-transition-group"

const Navbar = () => {
  return (
    <NavbarContent>
      <NavItem icon={<FontAwesomeIcon className="fa__icon" icon={faPlus} />} />
      <NavItem icon={<FontAwesomeIcon className="fa__icon" icon={faBell} />} />
      <NavItem icon={<FontAwesomeIcon className="fa__icon" icon={faEnvelope} />} />
      
      <NavItem icon={<FontAwesomeIcon className="fa__icon" icon={faCaretDown} />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavbarContent>
  )
}

const NavbarContent = props => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

const NavItem = props => {

  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</a>
      {open && props.children}
    </li>
  )
}

const DropdownMenu = () => {

  const [activeMenu, setActiveMenu] = useState("main")
  const [menuHeight, setMenuHeight] = useState(null)

  const calcHeight = el => {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  const DropdownItem = props => {
    return (
      <a href="#" className="menu-item" onClick={() => props.gotoMenu && setActiveMenu(props.gotoMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon={faCog} />}
            leftIcon={<FontAwesomeIcon icon={faCog} />}
            gotoMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faChevronLeft} />} gotoMenu="main" />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default connect(undefined, { startLogout })(Navbar)