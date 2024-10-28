import { useEffect, useState } from "react";
import BlogItem from "../../components/UI/Atoms/BlogItem";
import LinkBtn from "../../components/UI/Atoms/LinkBtn";


function HomeArticles() {
  const API_TOKEN =
    "29cbf3f06005b46cc8224997fb13ea34080a5b43ad3eb1725b5a1aa2f3d43611b37462c035513a8f1e833b7e3bbefed2764780715f0a2605b46ecfbeccdf114f879a5f8679042106a43a9e0e4259443f8036877f6b6e2f119d426c5c3d93bd57e9f5b1fce24cfd02a3ff56855c004119e6aad55f63f44455aeff0c6373fcf2ef";
  const [blogData, setBlogData] = useState([]); // Initialize as an empty array

  async function fetchBlogs() {
    try {
      const response = await fetch("http://localhost:1337/api/blogs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const blog = data.data[0].allBlogs;
      console.log(blog)

      setBlogData(blog); // Set the parsed blogs in state
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);



  // Ensure blogData is defined and is an array before slicing
  const articlesData = blogData.length > 0 ? blogData.slice(3, 7) : [];

  return (
    <>
      <div className="title pb-10 flex justify-between items-center">
        <h4>Articles</h4>
        <LinkBtn linkText="Read More" to="/blog" />
      </div>
      <div className="grid md:grid-cols-4 gap-8 md:gap-2 pb-10">
        {articlesData.map((blog) => (
          <BlogItem blogData={blog} key={blog.id} /> // Use unique key from blog
        ))}
      </div>
    </>
  );
}

export default HomeArticles;
