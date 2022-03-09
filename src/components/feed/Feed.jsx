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
       setPosts(() => res.data)
     }
    fetchPost()
  }, [])


  
  return (
    <div className='feed-div'>
      <div className="feed-wrap">
      {console.log(Posts)}
        <Share/>
        {
          Posts.map((p)=>(
            <Post
              key={p["_id"]}
              post={p}
            />
          )) 
          }
        {console.log(Posts)}
      </div>
    </div>
  )
}

export default Feed