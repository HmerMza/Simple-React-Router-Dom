import { Route, Routes } from "react-router-dom";
import CompNavbar from "./Components/CompNavbar";
import PageHome from "./Pages/PageHome";
import PageAbout from "./Pages/PageAbout";
import PageBlog from "./Pages/PageBlog";
import Page404 from "./Pages/Page404";
import LayautPrincipal from "./Layouts/LayautPrincipal";
import PageBlogDetalle from "./Pages/PageBlogDetalle";
const App = () => {
  return (
    <>
      <CompNavbar />
      <Routes>
        <Route path="/" element={<LayautPrincipal />}>
          <Route element={<PageHome />} path="/" />
          <Route element={<PageAbout />} path="/about" />
          <Route element={<PageBlog />} path="/blog" />
          <Route element={<Page404 />} path="*" />
          <Route element={<PageBlogDetalle />} path="/blog/:id" />
        </Route>
      </Routes>
    </>
  );
};
export default App;
