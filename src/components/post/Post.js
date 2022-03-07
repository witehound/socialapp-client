import { MoreVert } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Post.css"

function Post({post, Users}) {
  const user = Users.filter(u=>u.id === post.id)

  const [total, setTotal] = useState(0)
  const [like, setLike] = useState(0)
 

  const hanleOnisLike = () => {
    if(like >= 1){
      setLike(0)
      total <= 0 ? setTotal(0) : setTotal(total - 1)
    }else{
      setLike(1)
      setTotal(total + 1)
    }
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
            <img src="/assets/like.png" alt="" className="post-bottom-left-like" onClick={hanleOnisLike} />
            <img src="/assets/heart.png" alt="" className="post-bottom-left-heart" onClick={hanleOnisLike}/>
            <span className="post-bottom-left-counter" >{total} people liked this post</span>
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