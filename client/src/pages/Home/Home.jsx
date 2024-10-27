import HeroSwiper from "./HeroSwiper";
import Sale from "./Sale";
import Footer from "../../components/Footer";
import HeroHeading from "./HeroHeading";
import HomeArticles from "./HomeArticles";
import HomeCategories from "./HomeCategories";
import ProductSwiper from "./ProductSwiper";
import Services from "./Services";

function Home() {
  const data = {};

  const { homeCategories } = data;
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
        <HomeArticles />
      </div>
    </>
  );
}

export default Home;
