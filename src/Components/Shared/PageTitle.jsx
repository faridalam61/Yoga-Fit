import React from 'react'

function PageTitle({image,title}) {
  return (
    <div  style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}> <h2 className='text-5xl text-white text-center py-28'>{title}
        </h2> </div>
  )
}

export default PageTitle