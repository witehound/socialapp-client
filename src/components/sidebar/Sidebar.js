import './Sidebar.css'
import { RssFeed, Event, School, WorkOutline, HelpOutline, Bookmark, Group
,PlayCircleFilledOutlined, Chat } from '@material-ui/icons'

function Sidebar({users}) {
  return (
    <div className='sidebar-div'>
      <div className="sidebar-wrap">
        <ul className="sidbar-list-items">
          <li className="sidebar-list-item">
            <RssFeed  className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat  className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Chat</span>
          </li>
          <li className="sidebar-list-item">
            <PlayCircleFilledOutlined className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Group  className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark  className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutline  className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <WorkOutline  className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <Event  className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <School className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="side-bar-button">
          Show More
        </button>
        <hr className="side-bar-hr" />
        <ul className="side-bar-friendlist">
       {users.map((user)=>(
          <li key={user.id} className="side-bar-friend">
            <img src={user.profilePicture} alt="" className="siderbar-friend-img" />
            <span className='sidebar-friend-name'> {user.username} </span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar