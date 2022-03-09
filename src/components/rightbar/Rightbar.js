import './Rightbar.css'

function Rightbar({users , profile}) {

  const HomeRightBar = () => {
    return(
      <>
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
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
    <>
      <h4 className='profile-rightbar-title'>Users information</h4>
      <div className="right-bar-info">
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">City</span>
          <span className="right-bar-ingo-value">New york</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">From</span>
          <span className="right-bar-ingo-value">Madrid</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">Relationship</span>
          <span className="right-bar-ingo-value">Single</span>
        </div>
      </div>
      <h4 className='profile-rightbar-title'>Users friends</h4>
      <div className="right-bar-followings">
       <div className="rightbar-following-other">
         <div className="right-bar-following">
           <img src="/assets/person/6.jpeg" alt="" className="right-bar-following-img" />
           <span className="rightg-follwing-name">ezikiel</span>
         </div>
         <div className="right-bar-following">
           <img src="/assets/person/6.jpeg" alt="" className="right-bar-following-img" />
           <span className="rightg-follwing-name">ezikiel</span>
         </div>
         <div className="right-bar-following">
           <img src="/assets/person/6.jpeg" alt="" className="right-bar-following-img" />
           <span className="rightg-follwing-name">ezikiel</span>
         </div>
         <div className="right-bar-following">
           <img src="/assets/person/6.jpeg" alt="" className="right-bar-following-img" />
           <span className="rightg-follwing-name">ezikiel</span>
         </div> 
         <div className="right-bar-following">
           <img src="/assets/person/6.jpeg" alt="" className="right-bar-following-img" />
           <span className="rightg-follwing-name">ezikiel</span>
         </div>
         <div className="right-bar-following">
           <img src="/assets/person/6.jpeg" alt="" className="right-bar-following-img" />
           <span className="rightg-follwing-name">ezikiel</span>
         </div>
       </div>
      </div>
    </>
    )
  }

  return (
    <div className='rightbar-div'>
      <div className="right-bar-wrap">
       {profile ? <ProfileRightBar/> : <HomeRightBar/> } 
      </div>
    </div>
  )
}

export default Rightbar