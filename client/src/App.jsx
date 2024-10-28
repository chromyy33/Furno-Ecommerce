import Banner from "./components/Banner.jsx";
import Nav from "./components/Nav.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route, useNavigate, useHref} from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact Us/Contact.jsx";
import Products from "./pages/Products.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import { useEffect, useState } from "react";
import Article from "./pages/Blog/Article.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const navigate = useNavigate();
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const bannerText = "30% of storewide-Limited time!";

  const [blogData, setBlogData] = useState([]); // Initialize as an empty array

  async function fetchBlogs() {
    try {
      const apiUrl = import.meta.env.VITE_BLOG_TOKEN;
      const response = await fetch("http://localhost:1337/api/blogs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiUrl}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const blog = data.data[0].allBlogs;

      setBlogData(blog); // Set the parsed blogs in state
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <main>
        <div className="fixed top-0 w-full bg-white z-10">
          <Banner
            promotionText={bannerText}
            isBannerOpen={isBannerOpen}
            setIsBannerOpen={setIsBannerOpen}
          />
          <Nav />
        </div>
        <section
          className={`content-start  ${
            isBannerOpen ? "mt-[128px]" : "mt-[80px]"
          }`}
        >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home blogData={blogData} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/blog" element={<Blog blogData={blogData} />}></Route>
            <Route path="/blog/:title" element={<Article />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </section>
        <section className="h-screen bg-red-50">p2</section>
      </main>
    </NextUIProvider>
  );
}
export default App;
