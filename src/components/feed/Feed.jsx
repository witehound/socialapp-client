import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'

import {Posts, Users} from '../../dummyData'
function Feed() {
  return (
    <div className='feed-div'>
      <div className="feed-wrap">
        <Share/>
        {
          Posts.map((p)=>(
            <Post
              Users={Users}
              key={p.id}
              post={p}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Feed