import React from 'react'
import icon_avatar from '../../assets/avatar.svg'

const DashboardBlock = ({title, value, color}) => {
  return (
      <div style={{backgroundColor : color}} className={`w-full md:w-80 rounded-xl px-5 pt-4 pb-8`}>
          <div className='flex items-center justify-between'>
              <h2 className='text-[#718096] text-sm sm:text-base'>{title}</h2>
              <button className='size-7 bg-white border-2 border-[#edf2f7] grid place-items-center rounded-md'>
                  <img src={icon_avatar } alt="" />
              </button>
          </div>

          <p className='text-black text-4xl font-bold py-6'>{ value}</p>
          
    </div>
  )
}

export default DashboardBlock