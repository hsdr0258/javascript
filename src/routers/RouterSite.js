
import Home from "./../pages/frontends/Home";
import Contact from "./../pages/frontends/Contact";
import Product from "../pages/frontends/Product";
import ProductBrand from "../pages/frontends/ProductBrand";
import ProductCategory from "../pages/frontends/ProductCategory";
import ProductDetail from '../pages/frontends/ProductDetail';

const RouterSite = [
  {
    index: true,
    element: <Home />,
  },
  {
    index: true,
    path: 'home',
    element: <Home />,
  },
  {
    path: "thuong-hieu/:slug",
    element: <ProductBrand />,
  },
  {
    path: "chi-tiet-san-pham/:slug",
    element: <ProductDetail />,
  },
  {
    path: "danh-muc/:slug",
    element: <ProductCategory />,
  },
  {
    path: "san-pham",
    element: <Product />,
  },
  {
    path: "Lien-he",
    element: <Contact />,
  },
];

export default RouterSite;
