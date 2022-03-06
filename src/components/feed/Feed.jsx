import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'

function Feed() {
  return (
    <div className='feed-div'>
      <div className="feed-wrap">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed