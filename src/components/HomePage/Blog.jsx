import React from "react";
import "../CSS/Blog.css"; // Ensure your CSS file is linked
import { GoGlobe } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

// Blog Data
const blogs = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e",
    title: "Exploring Python for Data Science: Beginner to Advanced",
    web: "https://example.com/python-data-science",
    git: "https://github.com/example/python-data-science",
    date: "Apr. 14th, 2022",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    title: "The Future of AI in Gaming: Trends and Predictions",
    web: "https://example.com/ai-gaming",
    git: "https://github.com/example/ai-gaming",
    date: "Apr. 14th, 2022",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e",
    title: "Building Your First Mobile Game: Tips and Tricks",
    web: "https://example.com/mobile-game",
    git: "https://github.com/example/mobile-game",
    date: "Apr. 14th, 2022",
  },
];

const Blog = () => (
  <div className="container">
    <div>
      <h5 className="txt">Blogs</h5>
    </div>
    <div className="learn-more">
      <button className="learn-more-btn">View More</button>
    </div>
    <div className="row align-items-stretch blog-layout">
      {blogs.map((blog) => (
        <div className="blog-md" key={blog.id}>
          <a href="#" className="h-entry mb-30 v-height gradient">
            <img className="featured-img" src={blog.img} alt={blog.title} />
            <div className="blog-links"> {/* Ensuring correct class name */}
              <div className="web" uk-tooltip="title: Website">
                <a
                  href={blog.web}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${blog.title} website`}
                >
                  <GoGlobe size="2rem" />
                </a>
              </div>
              {blog.git && (
                <div className="git" uk-tooltip="title: Github">
                  <a
                    href={blog.git}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${blog.title} on GitHub`}
                  >
                    <BsGithub size="2rem" />
                  </a>
                </div>
              )}
            </div>
            <div className="text">
              <span className="date">{blog.date}</span>
              <h2>{blog.title}</h2>
            </div>
          </a>
        </div>
      ))}
    </div>
   
  </div>
);

export default Blog;
