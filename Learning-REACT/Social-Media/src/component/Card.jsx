import { FcLike } from "react-icons/fc";
import { MdDelete, MdOutlineModeComment } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useContext, useState } from "react";
import { PostItemsContext } from "../store/PostListContext";

const Card = ({ postId, userId, media, caption, likes, comments }) => {
  const [like, setLike] = useState(false);
  const { deletePost } = useContext(PostItemsContext);

  const handleDelete = () => {
    deletePost(postId);
  };

  const handleLikeToggle = () => {
    setLike(!like); // Toggle the like state
  };

  return (
    <>
      <div className='card' style={{ width: "90%", margin: "5px" }}>
        <div className='card-body'>
          <h6
            className='card-title'
            style={{
              border: "2px solid rgb(240,240,240)",
              height: "32px",
              display: "flex",
              alignItems: "center",
              padding: "10px 0px",
              justifyContent: "space-between",
            }}>
            {userId}
            <MdDelete onClick={handleDelete} />
          </h6>

          <center>
            <img src={media} style={{ width: "90%" }} />
          </center>
          <p className='card-text '>{caption}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: "2px solid rgb(240,240,240)",
            }}>
            <div
              style={{
                display: "flex",
              }}
              onClick={handleLikeToggle}>
              {like === true ? <FcLike size={28} /> : <CiHeart size={28} />}
              {likes}
            </div>

            <div>
              <MdOutlineModeComment size={24} />
              {comments}
            </div>

            <FaRegShareSquare size={24} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
