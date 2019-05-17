import React from "react";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://simple-blog-api.crew.red/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result
          });
        }
      )
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="blog-list">
        {posts.map(item => (          
            <article className="blog-item" key={item.id}>
              <h3 className="blog-item__title default-title">{item.title}</h3>
              <p className="blog-item__description default-paragraph">
                {item.body}
              </p>
              <div className="blog-item-info">
                <span className="blog-item-info__author">{item.author}</span>
                <span className="blog-item-info__date">{item.date}</span>
              </div>
              <Link to={`/views/${item.id}`}>{item.title}</Link>
            </article>
        ))}
      </div>
    );
  }
}

export default Blog;