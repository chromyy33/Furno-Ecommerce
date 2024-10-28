import BlogItem from "../../components/UI/Atoms/BlogItem";
import LinkBtn from "../../components/UI/Atoms/LinkBtn";

function HomeArticles({ blogData }) {
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
