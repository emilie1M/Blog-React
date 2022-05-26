import React from "react"
import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
             src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
             alt="" />
            <p>
                Bienvenu sur notre Blog ! Il a été mis sur place pour vous aider dans le domaine informatique à travers les expériences personnelles et professionnelles d'autres personnes!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">sport</li>
                <li className="sidebarListItem">style</li>
                <li className="sidebarListItem">music</li>
                <li className="sidebarListItem">tech</li>
                <li className="sidebarListItem">cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarpIcon fa-brands fa-instagram"></i>
            </div>
            </div>
    </div>

  )
}

export default Sidebar