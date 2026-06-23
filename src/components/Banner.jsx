import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import banner2 from '../assets/banner2.svg'

const Banner = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[20px] lg:mt-[40px]">

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[535px] gap-[10px]">

        {/* баннер 1 */}
        <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden bg-[#F5F7FA] rounded-[20px] lg:rounded-[30px] p-[16px] lg:p-[32px] flex flex-col justify-between">

          <h1 className="font-inter font-semibold text-[36px] lg:text-[46px] xl:text-[55px] text-black leading-none tracking-normal">
            Простое и прозрачное восстановление кошелька
          </h1>

          <p className="font-inter font-normal text-[16px] lg:text-[16px] xl:text-[18px] text-[#6F6F6F] leading-none tracking-normal">
            Самый простой способ восстановить свой потерянный пароль от кошелька и расследовать обманутую криптовалюту
          </p>

          <div className="flex gap-[10px] items-center flex-wrap">
            <NavLink
              to="/request"
              className="h-[50px] px-[22px] bg-gradient-to-r from-[#D4151C] to-[#D35400] text-white text-[16px] font-semibold rounded-[8px] flex items-center justify-center hover:opacity-90 transition duration-300 whitespace-nowrap"
            >
              Оставить заявку
            </NavLink>

            <NavLink
              to="/about-us"
              className="h-[50px] px-[22px] border border-[#D8D8D8] bg-transparent text-black text-[16px] font-semibold rounded-[8px] flex items-center justify-center gap-[4px] hover:bg-black/5 transition duration-300 whitespace-nowrap"
            >
              Подробнее
              <FiArrowUpRight size={20} className="text-black shrink-0" />
            </NavLink>
          </div>

        </div>

        {/* баннер 2 */}
        <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden rounded-[20px] lg:rounded-[30px]">
          <img src={banner2} alt="Banner" className="w-full h-full object-cover" />
        </div>

      </div>

    </div>
  )
}

export default Banner
