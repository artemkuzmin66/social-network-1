import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/Preloader/FormsControls/FormsControl';

const MyPosts = (props) => {

   let postElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);

   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   }


   const maxLength10 = maxLengthCreator(10);

   const PostForm = (props) => {
      return (
         <form onSubmit={props.handleSubmit}>
            <div>
               <Field name={'newPostText'} component={Textarea} placeholder={'message'} validate={[required, maxLength10]} />
            </div>
            <div>
               <button>Add</button>
            </div>
         </form>
      )
   }
   const PostReduxForm = reduxForm({ form: 'addNewPost' })(PostForm)


   return (
      <div>
         <h3>My posts</h3>
         <PostReduxForm onSubmit={onAddPost} />
         {postElements}
      </div >
   );

}
export default MyPosts;