import React from 'react'

const ChinhSach = (props) => {
    const Image=props.image;
    const Title=props.title;
    const Des=props.des;
  return (
    <div className='row'>
      <div className='col'>
        <img src={Image} className='img-fruid'  alt='chinhsach1' />
      </div>
    </div>
  )
}

export default ChinhSach
