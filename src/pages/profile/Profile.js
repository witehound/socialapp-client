import './Profile.css' 
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import {Posts, Users} from '../../dummyData'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user,setUser] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:8800/user?username=sh55oter`)
      setUser(res.data)
    }
   fetchPost()
 }, [])

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
          <img src={`${PF}post/1.jpeg`} alt="" className="profile-cover-img" />
          <img src={`${PF}post/2.jpeg`}  alt="" className="profile-cover-img-user" /> 
          <div className="profile-info">
              <h4 className="profile-name">
                {user.username}
              </h4>
              <span className="profile-info-desc">
              {user.discription}
              </span>
          </div>
        </div>
       </div>
       <div className="profile-rigth-bottom">
        <Feed username="shooter"/>
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