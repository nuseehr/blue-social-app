import React from "react";
import locale from "date-fns/locale/ko";
import classnames from "classnames";
import distanceInWords from "date-fns/distance_in_words_to_now";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const Post = ({ post, onLikeClicked, onCommentSubmit }) => {
  console.log("POST RENDER", post);
  const {
    seq,
    createAt,
    writer: { name },
    contents,
    comments,
    likes,
    likesOfMe,
    commentList
  } = post;

  const datetime = distanceInWords(createAt, {
    locale,
    addSuffix: true
  });

  const likeHandler = e => {
    e.preventDefault();
    onLikeClicked(seq);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle text-muted">{datetime}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <div className="card-info">
          <button type="button" className="thumb-count" onClick={likeHandler}>
            <i
              className={classnames("far fa-thumbs-up", {
                on: likesOfMe
              })}
            />{" "}
            {likes} 개
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt">{comments}개</i>
          </span>
        </div>
      </div>
      <CommentList commentList={commentList} />
      <CommentForm postseq={seq} onCommentSubmit={onCommentSubmit} />
    </div>
  );
};

export default Post;
