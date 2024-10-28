import { Tabs, Tab } from "@nextui-org/tabs";
import PageImage from "../../components/UI/Atoms/PageImage";
import { useEffect, useState } from "react";
import BlogItem from "../../components/UI/Atoms/BlogItem";
import { Button } from "@nextui-org/react";
function Blog() {
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
  const [showAllArticles, setShowAllArticles] = useState(false);
  const articleCount = 9;

  const articlesToShow = blogData.slice(0, articleCount);
  const finalArr = showAllArticles ? blogData : articlesToShow;
  function handleVisibility() {
    setShowAllArticles(!showAllArticles);
  }
  return (
    <div className="max-width mx-auto px-8 ">
      <PageImage
        src={
          "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title="Our Blog"
        subheading="Home improvement ideas and inspiration."
      />
      <Tabs variant="underlined" className="py-8">
        <Tab key={"All Blogs"} title="All Blogs">
          <div className="article-list grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-20">
            {finalArr.map((blogData) => {
              return <BlogItem blogData={blogData} />;
            })}
          </div>
          <Button
            className="block mx-auto text-black/2 font-medium w-[8rem]"
            radius="full"
            variant="bordered"
            onClick={() => {
              handleVisibility();
            }}
          >
            {!showAllArticles ? "Show More" : "Show Less"}
          </Button>
        </Tab>
        <Tab key={"Featured"} title="Featured">
          <div className="article-list grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-20">
            {[...blogData]
              .filter((_, index) => {
                return index % 4 === 0;
              })
              .map((blogData) => {
                return <BlogItem blogData={blogData} />;
              })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Blog;
