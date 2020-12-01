import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src='https://bumper-stickers.ru/7436-thickbox_default/logotip-twitter.jpg' />
         {props.message}
         <div>
            <span>like</span> {props.likesCount}
         </div>
      </div>
   );
}

export default Post;