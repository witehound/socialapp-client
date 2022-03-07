import './Profile.css' 
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import {Posts, Users} from '../../dummyData'

function Profile() {
  return (
    <div className='home-div'>
    <Topbar />
    <div className="profile">
      <Sidebar
        users={Users}
      />
      <div className="profile-right">
       <div className="profile-right-top">
        <div className="profile-cover">
          <img src="/assets/post/1.jpeg" alt="" className="profile-cover-img" />
          <img src="/assets/person/2.jpeg" alt="" className="profile-cover-img-user" /> 
          <div className="profile-info">
              <h4 className="profile-name">
                safak
              </h4>
              <span className="profile-info-desc">
              safak about
              </span>
          </div>
        </div>
       </div>
       <div className="profile-rigth-bottom">
        <Feed/>
        <Rightbar
         users={Users}
         Profile
        />
       </div>
      </div>
      
    </div>
  </div>
  )
}

export default Profile