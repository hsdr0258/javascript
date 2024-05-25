import React from 'react'
import {
    FaSearch,
    FaRegUser,
  } from "react-icons/fa";
  import { CiHeart } from "react-icons/ci";
  import { PiBellRingingFill } from "react-icons/pi";
  import { BsHandbag } from "react-icons/bs";
  
const icon_header = () => {
  return (
    <div>
      <FaSearch />
              <FaRegUser />
              <PiBellRingingFill />
              <CiHeart />
              <BsHandbag />
    </div>
  )
}

export default icon_header
