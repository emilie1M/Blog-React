import React from "react"
import "./header.css"

function Header() {
  return (
    <div className='Header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React Emilie_Zeinieb_Ingrid</span>
            <span className="headerTitleLg"> Blog Group5</span>
        </div>
        <img className="headerImg"
         src="https://th.bing.com/th/id/R.af1ada60b8d95b34142bb7fab32a8822?rik=ZIpT3Fv%2fUdQZuA&pid=ImgRaw&r=0"
         alt="" />
    </div>
  )
}

export default Header