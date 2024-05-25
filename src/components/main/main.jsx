import React from 'react'
import ChinhSachItem from "./ChinhSachItem.jsx";
import Database_1 from "../../data_fake.json";
import Database_2 from "../../data_fake_2.json";
import Product_sale from './Product_sale.jsx';
import Product from './Product';
import Slider1 from './Slider.jsx';

const main = () => {
    const listproduct_1 = Database_1.products;
    const listproduct_2 = Database_2.products_2;
  return (
    <div>
      <main>
        {/* //slide động */}
        <div className="Slider"><Slider1 /></div>
        {/* chính sách sale */}
        <div className="ChinhSach">
          <div className="row">
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_2.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_3.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_4.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
          </div>
        </div>
        {/* flash_sale */}
        <div className="section_flash_sale">
          <div className="container">
            <div className="row">
              {listproduct_1.map((pt, index) => {
                return (
                  <div className="col-md" key={index}>
                    <Product_sale product={pt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* sản phẩm */}
        <div className="product">
          <div className="container">
            <h1>Danh sách sản phẩm</h1>
            <div className="row">
              {listproduct_2.map((pt, index) => {
                return (
                  <div className="col-md" key={index}>
                    <Product product={pt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default main
