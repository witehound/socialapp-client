import { MoreVert } from '@material-ui/icons'
import React from 'react'
import "./Post.css"

function Post() {
  return (
    <div className='post-div'>
      <div className="post-wrap">
        <div className="post-top">
          <div className="post-top-left">
              <img src="/assets/person/1.jpeg" alt="" className="post-icon" />
              <span className="post-username">Safak kogaoglu</span>
              <span className="post-date">5 mins ago</span>
          </div>
          <div className="post-top-right">
              <MoreVert/>
          </div>
        </div>
        <div className="post-centre">
          <div className="post-text">
              hey! its my first post
          </div>
          <img src="/assets/post/1.jpeg" alt="" className="post-center-media" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" className="post-bottom-left-like" />
            <img src="/assets/heart.png" alt="" className="post-bottom-left-heart" />
            <span className="post-bottom-left-counter">32 people liked this post</span>
          </div>
          <div className="post-bottom-right">
             <div className="post-bottom-comment-text">9 comments</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post