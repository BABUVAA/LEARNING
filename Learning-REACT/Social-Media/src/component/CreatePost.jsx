import { useRef, useContext } from "react";
import { PostItemsContext } from "../store/PostListContext";

const CreatePost = () => {
  const userID = useRef();
  const captionRef = useRef();
  const media = useRef();
  const likes = useRef();
  const comments = useRef();
  const { addPost } = useContext(PostItemsContext); // Access addPost from context

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = media.current.files[0];
    const newPost = {
      postId: Date.now(),
      userId: userID.current.value,
      caption: captionRef.current.value,
      media: URL.createObjectURL(file), // Creating a URL for the media file
      likes: likes.current.value,
      comments: comments.current.value,
    };

    // Add the new post to the post list
    addPost(newPost);

    // Clear inputs
    userID.current.value = "";
    captionRef.current.value = "";
    media.current.value = "";
    likes.current.value = "";
    comments.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* User ID Input */}
      <div className='mb-3'>
        <label htmlFor='userID' className='form-label'>
          UserID:
        </label>
        <input
          ref={userID}
          type='text'
          className='form-control'
          id='userID'
          required
        />
      </div>

      {/* Caption Input */}
      <div className='mb-3'>
        <label htmlFor='caption' className='form-label'>
          Caption:
        </label>
        <textarea
          ref={captionRef}
          className='form-control'
          id='caption'
          rows='3'
          required
        />
      </div>

      {/* Media Upload Input */}
      <div className='mb-3'>
        <label htmlFor='media' className='form-label'>
          Media (image Only):
        </label>
        <input
          ref={media}
          type='file'
          className='form-control'
          id='media'
          accept='image/*,video/*'
          required
        />
      </div>

      {/* Likes Input */}
      <div className='mb-3'>
        <label htmlFor='likes' className='form-label'>
          Likes:
        </label>
        <input type='number' className='form-control' id='likes' ref={likes} />
      </div>

      {/* Comments Input */}
      <div className='mb-3'>
        <label htmlFor='comments' className='form-label'>
          Comments:
        </label>
        <input
          type='number'
          className='form-control'
          id='comments'
          ref={comments}
        />
      </div>

      {/* Submit Button */}
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
