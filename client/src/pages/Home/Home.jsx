import HeroSwiper from "./HeroSwiper";
import Sale from "./Sale";
import HeroHeading from "./HeroHeading";
import HomeArticles from "./HomeArticles";
import HomeCategories from "./HomeCategories";
import ProductSwiper from "./ProductSwiper";
import Services from "./Services";

function Home({ blogData }) {
  const data = {};

  return (
    <>
      <div className="max-width mx-auto hero px-8 ">
        <HeroSwiper />
        <HeroHeading />
        <HomeCategories />
        <ProductSwiper />
        <Services />
      </div>
      <Sale />
      <div className="max-width mx-auto px-8 ">
        <HomeArticles blogData={blogData} />
      </div>
    </>
  );
}

export default Home;
