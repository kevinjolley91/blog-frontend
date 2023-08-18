/* eslint-disable react/prop-types */
import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      Search:
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id} value={post.title} />
        ))}
      </datalist>
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} className="posts">
            <div className="card mb-3">
              <div className="text-center">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <p className="card-text">
                  <small className="text-muted">{post.created_at}</small>
                </p>
              </div>
              <button onClick={() => props.onShowPost(post)}>More info</button>
            </div>
          </div>
        ))}
    </div>
  );
}
