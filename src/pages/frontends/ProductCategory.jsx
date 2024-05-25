import React from 'react'
import Hearder from "../../components/hearder/header";
import Main from './../../components/main/main';
import Footer from "../../components/footer/footer";

const ProductCategory = () => {
  return (
    <div>
       <>
      {/* header */}
      <div className="Header"> <Hearder /> </div>
      {/* main */}
      <div className="Main"> <Main/>  </div>
      {/* footer */}
      <div className="Footer"> <Footer/> </div>
    </>
    </div>
  )
}

export default ProductCategory
