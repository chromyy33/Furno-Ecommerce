import BlogItem from "./BlogItem";
import LinkBtn from "./LinkBtn";

function HomeArticles() {
  const articlesData = [
    {
      title: "Exploring the Wonders of Nature",
      datePosted: "2024-10-15",
      timestamp: 1729637805427, // Unix timestamp
      imgUrl:
        "https://www.ikea.com/ext/ingkadam/m/21e3f1e3a5965a39/original/PH188373-crop001.jpg?f=m",
    },
    {
      title: "The Future of Technology",
      datePosted: "2024-10-10",
      timestamp: 1696899600, // Unix timestamp
      imgUrl:
        "https://www.ikea.com/ext/ingkadam/m/26952ca709bb7225/original/PH192219.jpg?f=sg",
    },
    {
      title: "Healthy Living Tips",
      datePosted: "2024-10-05",
      timestamp: 1696447200, // Unix timestamp
      imgUrl:
        "https://www.ikea.com/ext/ingkadam/m/3b8b6e5992ac89af/original/PH187593.jpg?f=m",
    },
    {
      title: "Dinner Room Masterclass",
      datePosted: "2024-10-05",
      timestamp: 1696447200, // Unix timestamp
      imgUrl:
        "https://www.ikea.com/ext/ingkadam/m/1e62e041fdde7559/original/PH200553.jpg?f=sg",
    },
  ];

  return (
    <>
      <div className="title pb-10 flex justify-between items-center">
        <h4>Articles</h4>
        <LinkBtn linkText="Read More" to='/blog'></LinkBtn>
      </div>
      <div className="grid md:grid-cols-4 gap-8 md:gap-2 pb-10">
        {articlesData.map((blogData) => {
          return <BlogItem blogData={blogData} key={blogData.timestamp} />;
        })}
      </div>
    </>
  );
}

export default HomeArticles;
