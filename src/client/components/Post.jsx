import React, {useState} from "react";
import "../assets/prism.css";
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

const Post = ({ post }) => {
  const [showCode, setShowCode] = useState(false);
  console.log(post);
  return (
    <div className="post" onClick={() => setShowCode(!showCode)}>
      <h2>{post.title}</h2>
      <h5>{post.description}</h5>
      {showCode ? (
        <pre>
          <code className="language-">{post.codeBlock}</code>
        </pre>
      ) : null}
      <br />
      <div className="like-container">
        <AiOutlineLike size={'30px'} />
        <AiOutlineDislike size={'30px'} />
      </div>
    </div>
  );
};

export default Post;
