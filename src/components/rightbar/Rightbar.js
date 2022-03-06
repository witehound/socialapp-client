import './Rightbar.css'

function Rightbar() {
  return (
    <div className='rightbar-div'>
      <div className="right-bar-wrap">
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text"><b>Pola Foster </b>and <b>3 other friends</b>, havve the birthday today.</span>
        </div>
        <img src="/assets/ad.png" alt="" className="space-for-advertisement" />
        <h4 className="right-bar-title">Friends Online</h4>
        <ul className="friends-online-list">
          <li className="friend-online">
            <div className="friend-online-image-container">
              <img src="/assets/person/3.jpeg" alt="" className="friend-online-image" />
              <span className="friend-online-status"> </span>
            </div>
            <span className="friends-online-usename">John Carter</span>
          </li>
          <li className="friend-online">
            <div className="friend-online-image-container">
              <img src="/assets/person/3.jpeg" alt="" className="friend-online-image" />
              <span className="friend-online-status"> </span>
            </div>
            <span className="friends-online-usename">John Carter</span>
          </li>
          <li className="friend-online">
            <div className="friend-online-image-container">
              <img src="/assets/person/3.jpeg" alt="" className="friend-online-image" />
              <span className="friend-online-status"> </span>
            </div>
            <span className="friends-online-usename">John Carter</span>
          </li>
          <li className="friend-online">
            <div className="friend-online-image-container">
              <img src="/assets/person/3.jpeg" alt="" className="friend-online-image" />
              <span className="friend-online-status"> </span>
            </div>
            <span className="friends-online-usename">John Carter</span>
          </li>
          <li className="friend-online">
            <div className="friend-online-image-container">
              <img src="/assets/person/3.jpeg" alt="" className="friend-online-image" />
              <span className="friend-online-status"> </span>
            </div>
            <span className="friends-online-usename">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar