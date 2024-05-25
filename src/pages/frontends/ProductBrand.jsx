import React from 'react'
import Hearder from "../../components/hearder/header";
import MainBrand from './../../components/main/mainBrand';
import Footer from "../../components/footer/footer";

const ProductBrand = () => {
  return (
    <div>
      <>
      {/* header */}
      <div className="Header"> <Hearder /> </div>
      {/* main */}
      <div className="Main"> <MainBrand/>  </div>
      {/* footer */}
      <div className="Footer"> <Footer/> </div>
    </>
    </div>
  )
}

export default ProductBrand
