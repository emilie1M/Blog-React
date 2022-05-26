import React from "react"
import "./write.css"

function Write() {
  return (
    <div className="write">
        <img 
          className="writeImg"
          src="https://th.bing.com/th/id/OIP.luZobHdtbJPFQxZTcMK30AHaDn?pid=ImgDet&rs=1"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-thin fa-plus"></i>
            </label>
            <input type="file" id="fileInput"  style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus= {true} />
          </div>
          <div className="writeFormGRoup">
            <textarea
              placeholder="Tell us about you.."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write