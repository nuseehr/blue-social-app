import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
export default class App extends Component {
  state = {
    user: {
      name: "Boykin",
      profileImageUrl:
        "https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png"
    },
    posts: []
  };

  addPost = contents => {
    this.setState({
      posts: [
        {
          seq: this.state.posts.length,
          writer: this.state.user,
          contents: contents,
          createAt: new Date(),
          likes: 0,
          comments: 0,
          likesOfMe: false,
          commentList: []
        },
        ...this.state.posts
      ]
    });
  };

  likePost = postSeq => {
    const posts = this.state.posts.splice(0);
    const idx = posts.findIndex(v => v.seq === postSeq);
    const post = posts[idx];

    if (post.likesOfMe === false) post.likes += 1;
    post.likesOfMe = true;
    this.setState({ posts });
  };

  addComment = (postSeq, contents) => {
    const posts = this.state.posts.splice(0);
    const idx = posts.findIndex(v => v.seq === postSeq);
    const post = posts[idx];

    post.commentList = [
      ...post.commentList,
      {
        seq: post.commentList.length,
        createAt: new Date(),
        writer: this.state.user,
        contents
      }
    ];
    this.setState({ posts });
  };

  render() {
    return (
      <div>
        <Header />
        <Home
          posts={this.state.posts}
          onPostCommit={this.addPost}
          onLikeClicked={this.likePost}
          onCommentSubmit={this.addComment}
        />
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: Dotum, "맑은 고딕", "roboto", "Helvetica Neue",
              Helvetica, Arial, "맑은 고딕", malgun gothic, "돋움", Dotum,
              sans-serif;
            color: #202b3d;
            background-color: #e9eaed;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
          }
          body {
            padding: 100px 0;
          }

          nav.fixed-top {
            height: 50px;
          }
          nav.navbar.bg-blue {
            background-color: #3b5999;
          }
          .nav .nav-item .nav-link {
            color: white;
            font-weight: 800;
            font-size: 12px;
            cursor: pointer;
            line-height: 26px;
          }
          .nav .nav-item .nav-link:hover {
            color: rgba(255, 255, 255, 0.75);
          }

          .navbar-brand i.fa-facebook-square {
            font-size: 27px;
            color: white;
          }

          .nav-link > img {
            width: 25px;
            height: 25px;
            border-radius: 100%;
            overflow: hidden;
            margin-right: 5px;
          }
        `}</style>
      </div>
    );
  }
}
