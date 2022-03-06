import './Share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

function Share() {
  return (
    <div className='share-div'>
     <div className="share-wrap">
         <div className="share-top">
           <img src="/assets/person/1.jpeg" alt="" className="share-profile" />
           <input type="text" className="share-input" placeholder='Whats on your mind safak'/>
         </div>
         <hr className='share-hr'/>
         <div className="share-bottom">
           <div className="options-container">
               <div className="share-option">
                   <PermMedia htmlColor='tomato' className='share-icon'/>
                   <span className='share-option text'>Media</span>
               </div>
               <div className="share-option">
                   <Label htmlColor='blue' className='share-icon'/>
                   <span className='share-option text'>Tag</span>
               </div>
               <div className="share-option">
                   <Room htmlColor='green' className='share-icon'/>
                   <span className='share-option text'>Locations</span>
               </div>
               <div className="share-option">
                   <EmojiEmotions htmlColor='goldenrod' className='share-icon'/>
                   <span className='share-option text'>Feelings</span>
               </div>
           </div>
           <button className='share-button-share'>Share</button>
         </div>
     </div>
    </div>
  )
}

export default Share