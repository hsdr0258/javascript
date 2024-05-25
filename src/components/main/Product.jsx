import product1 from "./../../assets/images/quan.webp";

import React from "react";

const Product = (props) => {
  const Product = props.product;
  return (
    <div>
      <div class="col">
        <div class="card">
        {/* <img src={Product.Image} className="img-fluid" alt={Product.ten} /> */}
        <img src={product1} className="img-fluid" alt={Product.ten} />
          <div class="card-body">
            <h5 class="card-title">{Product.ten}</h5>
            <p class="card-text">{Product.mota}</p>
            <p class="card-text">{Product.gia}</p>
            <a href="#" class="btn btn-primary">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
