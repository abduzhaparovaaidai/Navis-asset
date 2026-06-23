import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./pages/Main.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import Price from "./pages/Price.jsx";
import Contacts from "./pages/Contacts.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Request from "./pages/Request.jsx";
// import Reviews from "./pages/Reviews.jsx";

function App() {

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">

      <Header />

      <main className="flex-grow pt-[70px] lg:pt-[80px]">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news-details/:id" element={<NewsDetail />} />
          <Route path="/price" element={<Price />} />
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
