import React from 'react'
import Hearder from "../../components/hearder/header";
import MainDetail from '../../components/main/mainDetail';
import Footer from "../../components/footer/footer";
import slide1 from "../../assets/images/ao.webp"

const ProductDetail = () => {
  return (
    <div>
      <>
      {/* header */}
      <div className="Header"> <Hearder /> </div>
      {/* main */}
      <div className="Main"> <MainDetail/>  </div>
      {/* <div className="row">
            <h2 className="text-main fs-4 pt-4">Sản phẩm khác</h2>
            <div className="product-category mt-3">
              <div className="row product-list">
                {Array(8)
                  .fill(null)
                  .map((_, product) => (
                    <div className="col-6 col-md-3 mb-4" key={product}>
                      <div className="product-item border">
                        <div className="product-item-image">
                          <a href="#">
                            <img
                              src= "<slide1 />"
                              className="img-fluid"
                              alt=""
                              id="img1"
                            />
                            <img
                              className="img-fluid"
                              src="src/assets/images/ao.w"
                              alt=""
                              id="img2"
                            />
                          </a>
                        </div>
                        <h2 className="product-item-name text-main text-center fs-5 py-1">
                          <a href="#">
                            Thời trang nam {product + 1}
                          </a>
                        </h2>
                        <h3 className="product-item-price fs-6 p-2 d-flex">
                          <div className="flex-fill">
                            <del>200.000đ</del>
                          </div>
                          <div className="flex-fill text-end text-main">
                            190.000đ
                          </div>
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div> */}

      {/* footer */}
      <div className="Footer"> <Footer/> </div>
    </>
    </div>
  )
}

export default ProductDetail
