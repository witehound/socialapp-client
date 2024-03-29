import { useState,useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'
import axios from 'axios'

function Feed({username}) {
  const [Posts,setPosts] = useState([])


  useEffect(() => {
     const fetchPost = async () => {
       const res = username ? await axios.get(`http://localhost:8800/post/profile/${username}`) :await axios.get("http://localhost:8800/post/timeline/622103d9192def301274755e")
       setPosts(() => res.data)
     }
    fetchPost()
  }, [username])


  
  return (
    <div className='feed-div'>
      <div className="feed-wrap">
        <Share/>
        {
          Posts.map((p)=>(
            <Post
              key={p._id}
              userId={p.userId}
            />
          )) 
          }
      </div>
    </div>
  )
}

export default Feed