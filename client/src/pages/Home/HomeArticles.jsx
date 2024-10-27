import BlogItem from '../../components/UI/Atoms/BlogItem'
import LinkBtn from '../../components/UI/Atoms/LinkBtn'
import articles from '../Blog/BlogData';
function HomeArticles() {
  const articlesData = articles.slice(3,7)

  return (
    <>
      <div className="title pb-10 flex justify-between items-center">
        <h4>Articles</h4>
        <LinkBtn linkText="Read More" to='/blog'></LinkBtn>
      </div>
      <div className="grid md:grid-cols-4 gap-8 md:gap-2 pb-10">
        {articlesData.map((blogData) => {
          return <BlogItem blogData={blogData} key={blogData. date} />;
        })}
      </div>
    </>
  );
}

export default HomeArticles;
