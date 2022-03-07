import './Home.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import {Posts, Users} from '../../dummyData'

function Home() {
  return (
    <div className='home-div'>
      <Topbar />
      <div className="home-container">
        <Sidebar
          users={Users}
        />
        <Feed/>
        <Rightbar
          users={Users}
        />
      </div>
    </div>
  )
}

export default Home