import { MoreVert } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Post.css"

function Post({post, Users}) {
  const user = Users.filter(u=>u.id === post.id)
  const [likes, setLikes] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const [isHeart, setIsHeart] = useState(false)

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
              <img src={user[0].profilePicture} alt="" className="post-icon" />
              <span className="post-username">{user[0].username}</span>
              <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
              <MoreVert/>
          </div>
        </div>
        <div className="post-centre">
          <div className="post-text">
              {post?.desc}
          </div>
          <img src={post.photo} alt="" className="post-center-media" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" className="post-bottom-left-like"  onClick={handleOnClickLike}/>
            <img src="/assets/heart.png" alt="" className="post-bottom-left-heart" onClick={handleOnClickHeart}/>
            <span className="post-bottom-left-counter" >{likes} people liked this post</span>
          </div>
          <div className="post-bottom-right">
             <div className="post-bottom-comment-text">{post.comment} comments</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post