
import Product from './../pages/backends/Product';
import Category from './../pages/backends/Category';
import Post from '../pages/backends/Post';
import Order from './../pages/backends/Order';
import User from './../pages/backends/User';
import Orderdetail from './../pages/backends/Orderdetail';
import Contact from './../pages/frontends/Contact';
import Menu from '../pages/backends/Menu';
import Banner from '../pages/backends/Banner';
import Brand from './../pages/backends/Brand';
import Topic from './../pages/backends/Topic';

const RouterAdmin =[
    {
        path:'product',
        element: <Product/>        
    },
    {
        path:'category',
        element: <Category/>
    },
    {
        path:'post',
        element: <Post />
    },
    {
        path:'order',
        element: <Order />
    },
    {
        path:'user',
        element: <User/>
    },
    {
        path:'orderdetail',
        element: <Orderdetail/>
    },
    {
        path:'contact',
        element: <Contact/>
    },
    {
        path:'menu',
        element: <Menu/>
    },
    {
        path:'banner',
        element: <Banner />
    },
    {
        path:'brand',
        element: <Brand/>
    },
    {
        path:'topic',
        element: <Topic/>
    },
];

export default RouterAdmin
