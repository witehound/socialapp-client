import './Topbar.css'
import {Search, Person, Chat, Notifications} from '@material-ui/icons'

function Topbar() {
  return (
    <div className='topbar-div'>
      <div className="topbar-div-left">
        <span className="logo">9ineesSocial</span>
      </div>
      <div className="topbar-div-center">
         <div className="search-bar-div">
           <Search className='search-icon'/>
           <input 
           type="text" 
           className="search-input" 
           placeholder='saerch for friends or posts'
           />
         </div>
      </div>
      <div className="topbar-div-right">
        <div className="top-bar-links">
          <span className="top-bar-link">Home page</span>
          <span className="top-bar-link">Tiem Line</span>
        </div>
        <div className="top-bar-icons">
          <div className="top-bar-icon-item">
            <Person/>
            <span className="top-bar-icon-item-badge">
              <span className="top-bar-icon-item-badge-count">1</span>
            </span>
          </div>
          <div className="top-bar-icon-item">
            <Chat/>
            <span className="top-bar-icon-item-badge">
              <span className="top-bar-icon-item-badge-count">1</span>
            </span>
          </div>
          <div className="top-bar-icon-item">
            <Notifications />
            <span className="top-bar-icon-item-badge">
               <span className="top-bar-icon-item-badge-count">1</span>
            </span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="top-bar-profile-picture" />
      </div>
    </div>
  )
}

export default Topbar