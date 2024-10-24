import HeroSwiper from "../components/HeroSwiper";
import Sale from "../components/Sale";
import Footer from "../components/UI/Footer";
import HeroHeading from "../components/UI/HeroHeading";
import HomeArticles from "../components/UI/HomeArticles";
import HomeCategories from "../components/UI/HomeCategories";
import ProductSwiper from "../components/UI/ProductSwiper";
import Services from "../components/UI/Services";
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
        <Footer />
    </>
  );
}

export default Home;
