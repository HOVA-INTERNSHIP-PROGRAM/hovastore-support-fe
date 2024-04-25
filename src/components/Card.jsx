import React from 'react'

function Card({ title, count, icon, iconBackground,style }) {
  return (
    <div>
      <div className={`${style} bg-white text-primary rounded-lg p-3 flex items-center justify-between shadow mt-3`}>
      <div className=''>
      <h2 className="text-2xl font-bold mb-1">{count}</h2>
      <span className="text-base text-darkGray">{title}</span>
      </div>
      <div className='flex items-end justify-end'>
        <div className={`flex items-center justify-center rounded-full p-4 ${iconBackground}`}>
            <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
