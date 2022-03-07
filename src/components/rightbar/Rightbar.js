import './Rightbar.css'

function Rightbar({users}) {
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
        {users.map((user)=>(
          <li key={user.id} className="friend-online">
            <div className="friend-online-image-container">
              <img src={user.profilePicture} alt="" className="friend-online-image" />
              <span className="friend-online-status"> </span>
            </div>
            <span className="friends-online-usename">{user.username}</span>
          </li>)
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default Rightbar