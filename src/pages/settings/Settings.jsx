import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
      <div className='settings'>
          <div className="settingWrapper">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className='settingsForm'>
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img
                  src="https://images.pexels.com/photos/5358117/pexels-photo-5358117.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="" />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
              </div>
              <label>Username</label>
              <input type="text" placeholder='john' />
              <label>Email</label>
              <input type="email" placeholder='johndoe@gmail.com' />
              <label>Password</label>
              <input type="password" />
              <button className="settingsSubmit">Update</button>
            </form>
          </div>
          <Sidebar/>
      </div>
  )
}
