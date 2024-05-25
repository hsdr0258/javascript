import React from 'react'
import {

    FaFacebook,
        FaInstagram,
        FaGoogle,
        FaYoutube,
      } from "react-icons/fa";

const icon_footer = () => {
  return (
    <div>
      <div class="col text-center">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-Google">
                      <FaGoogle />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-Youtobe">
                      <FaYoutube />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default icon_footer
