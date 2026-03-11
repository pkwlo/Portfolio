import { Routes, Route } from "react-router-dom";
import NavTop from "./sections/NavTop";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-container fixed top-14 md:top-20 inset-x-0 bottom-0 overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogLayout><Blog /></BlogLayout>} />
        <Route path="/blog/:slug" element={<BlogLayout><BlogPost /></BlogLayout>} />
      </Routes>
    </>
  );
}

export default App;
