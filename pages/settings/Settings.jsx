import React from "react"
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your profil</span>
          <span className="settingsDeleteTitle">Delete your profil</span>
        </div>
        <form className="settingsForm">
          <label >Profil Picture</label>
          <div className="settingsPP">
            <img src="https://th.bing.com/th/id/OIP.sfOK1116DHlTmQywrAdmcAAAAA?pid=ImgDet&rs=1"
             alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label >Username</label>
          <input type="text"  placeholder="Emilie" />
          <label >Email</label>
          <input type="email"  placeholder="emilie@gmail.com" />
          <label >Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div> 
      <Sidebar/>
    </div>
  )
}

export default Settings