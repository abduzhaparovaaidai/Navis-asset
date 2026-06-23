import React from 'react'
import { NavLink } from 'react-router-dom'
import formBg from '../assets/form.svg'
import walletImg from '../assets/wallet phone.png'

const gradient = { background: 'linear-gradient(135deg, #D4151C 0%, #D35400 100%)' }

const MainForm = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[80px] lg:mt-[200px] mb-[40px] lg:mb-[90px]">

      {/* Мобилка: градиент + иллюстрация снизу */}
      <div
        className="flex flex-col rounded-[20px] overflow-hidden lg:hidden"
        style={gradient}
      >
        <div className="flex flex-col gap-[20px] p-[24px]">
          {/* Левый заголовок */}
          <h2 className="font-inter font-semibold text-[28px] text-white leading-tight">
            Ваши деньги обратно в вашем кармане!
          </h2>
          {/* Правый блок */}
          <p className="font-inter font-normal text-[14px] text-white leading-relaxed">
            Возьми свои финансы снова под контроль. Нажми на «Оставить заявку», чтобы получить помощь.
          </p>
          <NavLink
            to="/request"
            className="h-[50px] px-[20px] w-fit bg-white text-black font-inter font-semibold text-[16px] rounded-[8px] flex items-center justify-center hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap"
          >
            Оставить заявку
          </NavLink>
        </div>
        <img src={walletImg} alt="" className="w-full" />
      </div>

      {/* Десктоп: фоновая картинка form.svg */}
      <div
        className="hidden lg:flex rounded-[20px] h-[285px] flex-row items-center justify-between pl-[52px] pr-[38px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${formBg})` }}
      >
        {/* Левый заголовок */}
        <h2 className="font-inter font-semibold text-[50px] text-white leading-none tracking-normal max-w-[495px]">
          Ваши деньги обратно в вашем кармане!
        </h2>

        {/* Правый блок */}
        <div className="flex flex-col gap-[46px] items-end max-w-[246px]">
          <p className="font-inter font-normal text-[16px] text-white text-right leading-none tracking-normal">
            Возьми свои финансы снова под контроль. Нажми на «Оставить заявку», чтобы получить помощь.
          </p>
          <NavLink
            to="/request"
            className="h-[50px] px-[20px] w-[180px] bg-white text-black font-inter font-semibold text-[16px] rounded-[8px] flex items-center justify-center gap-[10px] hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap"
          >
            Оставить заявку
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default MainForm
