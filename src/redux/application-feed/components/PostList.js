import React from 'react';

const PostList = (props) => (
  <div>
    {props.posts.map(post => {
      return <p key={post.id}>{post.text}</p>;
    })}
  </div>
);

export default PostList;