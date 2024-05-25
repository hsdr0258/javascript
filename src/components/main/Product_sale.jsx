import React from "react";

const Product_sale = (props) => {
  const Product_sale = props.product;
  return (
    <div>
      <div class="col">
        <div class="card">
          <img
            src={Product_sale.Image}
            className="img-fluid"
            alt={Product_sale.ten}
          />
          <div class="card-body">
            <h5 class="card-title">{Product_sale.ten}</h5>
            <p class="card-text">{Product_sale.gia}</p>
            <a href="#" class="btn btn-primary">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_sale;
