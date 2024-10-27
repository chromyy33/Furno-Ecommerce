import { CalendarRangeIcon, Clock, UserCircle2 } from "lucide-react";
import ArticleBlock from "../../components/UI/Atoms/ArticleBlock";
import LinkBtn from "../../components/UI/Atoms/LinkBtn";
import articles from "./BlogData";
import BlogItem from "../../components/UI/Atoms/BlogItem";
import { useParams } from "react-router";
function Article() {
  const { title: articleTitle } = useParams();
  const blogData = articles.find((article) => {
    return article.title === articleTitle;
  });
  console.log(blogData);
  const {
    title,
    author,
    date: timestamp,
    image,
    headings,
    readTime,
    category,
  } = blogData;
  const userLocale = navigator.language || "en-US"; // Get user's locale
  const dateString = new Date(timestamp).toLocaleDateString(userLocale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  let suggestedData = [...articles].filter(
    (article) => article.category === category && article.title !== title
  );
  if (suggestedData.length < 3) {
    const additionalArticles = [...articles].filter(
      (article) => article.category !== category
    );
    suggestedData = [...suggestedData, ...additionalArticles];
  }
  return (
    <div className="px-8 max-width mx-auto">
      <LinkBtn linkText="back" color="#377DFF" to="./blog" type="back" />
      <div className="article-header">
        <p className="text-sm font-semibold pb-2 pt-8">ARTICLE</p>
        <h3>{title}</h3>
        <div className="flex text-greyLogo/80 text-sm md:text-base gap-2 md:gap-6 pt-6 pb-10">
          <span className="flex gap-1 items-center text font-medium">
            <UserCircle2 size={18} />
            {author}
          </span>
          <span className="flex gap-1 items-center text font-medium">
            <CalendarRangeIcon size={18} />
            {dateString}
          </span>
          <span className="flex gap-1 items-center text font-medium">
            <Clock size={18} />
            {readTime}
          </span>
        </div>
        <img
          className="min-h-[22rem] w-full object-cover max-h-[30rem]"
          src={image}
          alt={title}
        />

        <div className="flex gap-8 flex-col py-12">
          {headings.map((blockData) => {
            return <ArticleBlock blockData={blockData} />;
          })}
        </div>
        <div className="suggested">
          <div className="flex items-center justify-between pb-12">
            <h6>You might also like</h6>
            <LinkBtn linkText="More articles" to="/blog"></LinkBtn>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-20">
            {suggestedData.slice(0, 3).map((blogData) => {
              return <BlogItem blogData={blogData} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
