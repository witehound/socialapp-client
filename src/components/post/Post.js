import { MoreVert } from '@material-ui/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Post.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


function Post ({userId}) {
  const [user,setUser] = useState([])
  const [postToSee,setPostToSee] = useState([])
  const [likes, setLikes] = useState()
  const [isLiked, setIsLiked] = useState(false)
  const [isHeart, setIsHeart] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER 
  
  useEffect( () => {
    const fetchPost = async () => {
     const res = await axios.get(`http://localhost:8800/post/${userId}`)
     for(let i = 0; i < res.data.length;i++){
       setPostToSee(res.data[i])
       setLikes(res.data[i].likes.length)
     }
     
   }
   const fetchUser = async () => {
    const res = await axios.get(`http://localhost:8800/user/${userId}`)
    setUser(res.data)
  }
   fetchPost()
   fetchUser()
 }, [userId])

  

  const handleOnClickLike = () => {
    !isLiked ?  setLikes(likes + 1) :  setLikes(likes-1)
    setIsLiked(!isLiked)
  }

  const handleOnClickHeart = () => {
    !isHeart ?  setLikes(likes + 1) :  setLikes(likes-1)
    setIsHeart(!isHeart)
  }

  return (
    <div className='post-div'>
      <div className="post-wrap">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`}>
              <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="post-icon" />
            </Link>
              <span className="post-username">{user.username}</span>
              <span className="post-date">{postToSee.data}</span>
          </div>
          <div className="post-top-right">
              <MoreVert/>
          </div>
        </div>
        <div className="post-centre">
          <div className="post-text">
              {postToSee.desc}
          </div>
          <img src={PF+postToSee.img} alt="" className="post-center-media" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src={`${PF}like.png`} alt="" className="post-bottom-left-like"  onClick={handleOnClickLike}/>
            <img src={`${PF}heart.png`} alt="" className="post-bottom-left-heart" onClick={handleOnClickHeart}/>
            <span className="post-bottom-left-counter" >{likes} people liked this post</span>
          </div>
          <div className="post-bottom-right">
             <div className="post-bottom-comment-text">{postToSee.comments}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post