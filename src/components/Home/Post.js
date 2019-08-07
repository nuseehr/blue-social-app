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
      <style jsx global>{`
        .card {
          padding: 0;
          margin-top: 50px;

          border: none;
          border-radius: 0.5rem;
        }
        .card .card-body {
          padding: 40px;
        }
        .card .card-text {
          padding-top: 20px;
          white-space: pre-wrap;
        }
        .card .card-info {
          height: 20px;
        }
        .card .card-info .thumb-count,
        .card .card-info .comment-count {
          display: inline-block;
          margin-right: 24px;
          vertical-align: middle;
          font-size: 12px;
          cursor: pointer;
          padding: 0;
          border: none;
          background-color: transparent;
          transition: color ease-in-out 0.3s;
          transition: margin-top ease-in-out 0.2s;
        }
        .card .card-info .thumb-count:hover,
        .card .card-info .comment-count:hover {
          color: #007bff;
          margin-top: -3px;
        }
        .card .card-info .thumb-count .on {
          color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default Post;
