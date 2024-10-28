import { Link } from "react-router-dom";

import LinkBtn from "./LinkBtn";
function BlogItem({ blogData, onBlogPage = false }) {
  const { title, date: timestamp, image: url, id } = blogData;
  const userLocale = navigator.language || "en-US"; // Get user's locale
  const dateString = new Date(timestamp).toLocaleDateString(userLocale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link to={`/blog/${title}`}>
     
      <div className="hover:scale-[.99] smooth">
        <img
          src={url}
          alt={title}
          className="object-cover w-full  h-[18rem] md:h-[22rem]"
        />
        <div className="blog-title mt-4">
          <p className="font-medium text-lg">{title}</p>
          {onBlogPage ? (
            <p className="font-medium text-greyLogo mt-1">{`${dateString}`}</p>
          ) : (
            <LinkBtn
              linkText="Read More"
              color="#6C7275"
              to={`/blog/${title}`}
            />
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogItem;
