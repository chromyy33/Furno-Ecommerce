import { Tabs, Tab } from "@nextui-org/tabs";
import articles from "./BlogData";
import PageImage from "../../components/UI/Atoms/PageImage";
import { useState } from "react";
import BlogItem from "../../components/UI/Atoms/BlogItem";
import Article from "../../components/Article";
import { Button } from "@nextui-org/react";
function Blog() {
  const [showAllArticles, setShowAllArticles] = useState(false);
  const articleCount = 9;

  const articlesToShow = articles.slice(0, articleCount);
  const finalArr = showAllArticles ? articles : articlesToShow;
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
            {[...articles]
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
