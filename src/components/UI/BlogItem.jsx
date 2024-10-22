import LinkBtn from "./LinkBtn";

function BlogItem({ blogData, onBlogPage = false }) {
  const { title, timestamp, imgUrl: url } = blogData;
  const userLocale = navigator.language || "en-US"; // Get user's locale
  const dateString = new Date(timestamp).toLocaleDateString(userLocale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  console.log(dateString);
  return (
    <div className="">
      

      <img src={url} alt={title} className="object-cover w-full h-[22rem]" />
      <div className="blog-title mt-4">
        <p className="font-medium text-lg">{title}</p>
        {onBlogPage ? (
          <p className="font-medium text-greyLogo mt-1">{`${dateString}`}</p>
        ) : (
          <LinkBtn linkText="Read More" color="#6C7275" />
        )}
      </div>
    </div>
  );
}

export default BlogItem;
