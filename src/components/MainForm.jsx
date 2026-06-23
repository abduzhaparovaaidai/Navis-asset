import React from 'react'
import { NavLink } from 'react-router-dom'
import formBg from '../assets/form.svg'

const MainForm = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[80px] lg:mt-[200px] mb-[40px] lg:mb-[90px]">

      <div
        className="rounded-[20px] h-auto lg:h-[285px] flex flex-col lg:flex-row items-start lg:items-center justify-between px-[24px] lg:pl-[52px] lg:pr-[38px] py-[30px] lg:py-0 gap-[20px] lg:gap-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${formBg})` }}
      >
        {/* Левый заголовок */}
        <h2 className="font-inter font-semibold text-[28px] lg:text-[50px] text-white leading-tight lg:leading-none tracking-normal max-w-full lg:max-w-[495px]">
          Ваши деньги обратно в вашем кармане!
        </h2>

        {/* Правый блок */}
        <div className="flex flex-col gap-[20px] lg:gap-[46px] items-start lg:items-end lg:max-w-[246px]">
          <p className="font-inter font-normal text-[14px] lg:text-[16px] text-white text-left lg:text-right leading-relaxed lg:leading-none tracking-normal">
            Возьми свои финансы снова под контроль. Нажми на «Оставить заявку», чтобы получить помощь.
          </p>
          <NavLink
            to="/request"
            className="h-[50px] px-[20px] lg:w-[180px] bg-white text-black font-inter font-semibold text-[16px] rounded-[8px] flex items-center justify-center gap-[10px] hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap"
          >
            Оставить заявку
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default MainForm
