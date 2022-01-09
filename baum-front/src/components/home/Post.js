import { useState } from "react";
import "../../App.css";

function Post(props) {
  const [thumbsUp, setThumbsUp] = useState(false);

  return (
    <article className="post">
      <div className="post-header">
        <i className="far fa-user-circle fa-lg"></i>
        <div className="post-user">{props.postData.user} •</div>
        <div className="post-date">{props.postData.date}</div>
      </div>
      <h2 className="post-title">{props.postData.title}</h2>
      <p className="post-body">{props.postData.body}</p>
      <p className="post-mats">{props.postData.mats}</p>
      <p className="post-work">{props.postData.work}</p>
      <div className="post-footer">
        <div
          onClick={() => {
            setThumbsUp(!thumbsUp);
          }}
        >
          {thumbsUp ? (
            <i class="fas fa-thumbs-up"></i>
          ) : (
            <i class="far fa-thumbs-up"></i>
          )}
        </div>
        <i className="far fa-thumbs-down"></i>
        <i className="far fa-comment"></i>
        <div className="post-footer-text">7 Comments</div>
        <i className="far fa-heart"></i>
        <i className="fas fa-share"></i>
        <div className="post-footer-text">Share</div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </article>
  );
}

export default Post;
