import { useState,useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'
import axios from 'axios'

function Feed() {
  const [Posts,setPosts] = useState([])


  useEffect(() => {
     const fetchPost = async () => {
       const res = await axios.get("http://localhost:8800/post/timeline/622103d9192def301274755e")
       setPosts(() => res.data.following)
     }
    fetchPost()
  }, [])


  
  return (
    <div className='feed-div'>
      <div className="feed-wrap">
        <Share/>
        {
          Posts.map((p)=>(
            <Post
              key={p}
              post={p}
            />
          )) 
          }
      </div>
    </div>
  )
}

export default Feed