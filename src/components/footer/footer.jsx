import React from 'react'
import Intro from './intro_footer';
import Account from './Accounting';
import Link from './Lienket_footer';
import Contact from './Contact';
import icon_footer from './icon_footer';
import Note from './Note';



const footer = () => {
  return (
    <div>
      <footer class="footer mt-5 bg-dark text-light">
        <div class="container">
          <div class="row">
            {/* giới thiệu */}
            <div class="col-md-4">
              <div className="intro">< Intro /></div>
            </div>
            {/* chính sách */}
            <div class="col-md-4">
              <div className="account">< Account/></div>
            </div>
            {/* liên kết */}
            <div class="col-md-4">
              <div className="Link">< Link/></div>
            </div>
            {/* liên hệ */}
            <div class="col-md-4">
              <div className="Contact">< Contact/></div>
            </div>
          </div>
          {/* icon mạng xã hội */}
          <div class="row mt-3">
            <div className="Icon"> <icon_footer/> </div>
          </div>
          {/* note footer */}
          <div class="row mt-3">
            <div className="Note"> <Note/></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
