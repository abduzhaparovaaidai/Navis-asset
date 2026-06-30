import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logoNavisAsset.svg'
import { NavLink } from 'react-router-dom'
import LanguageSelect from './LanguageSelect.jsx'


const navClass = ({ isActive }) =>
    `relative h-full flex items-center text-[16px] font-normal text-black
    after:content-[''] after:absolute after:left-0 after:bottom-[16px]
    after:h-[6px] after:bg-[#D4151C]
    after:rounded-[8px] after:transition-all after:duration-300
    ${isActive
      ? 'after:w-full'
      : 'after:w-0 hover:after:w-full'
    }`

const mobileNavClass = ({ isActive }) =>
    `text-[24px] font-normal py-[16px] w-full cursor-pointer transition-colors duration-200
    ${isActive ? 'text-[#D4151C] font-medium' : 'text-black hover:text-[#D4151C]'}`


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <>
      {/* внешняя плашка хедера */}
      <div className='fixed top-0 left-0 w-full h-[64px] lg:h-[80px] border-b border-[#D8D8D8] bg-[#FFFFFF] z-50'>
        {/* внутренний контейнер */}
        <div className='w-full max-w-[1440px] mx-auto h-full px-[16px] lg:px-[150px] flex justify-between items-center'>

          {/* Левая часть: бургер + логотип рядом */}
          <div className='flex items-center gap-4 h-full shrink-0'>
            <button
              className='block lg:hidden text-gray-800 hover:text-black hover:bg-gray-100 p-[6px] rounded-[8px] transition-all duration-200 shrink-0 cursor-pointer'
              onClick={() => setIsOpen((v) => !v)}
              aria-label='Открыть меню'
            >
              <FiMenu size={26} />
            </button>
            <NavLink to='/' onClick={close}>
              <img src={logo} alt='Navis Asset' className='h-[36px] lg:h-[48px] w-auto' />
            </NavLink>
          </div>

          {/* Меню десктоп */}
          <nav className='hidden lg:flex flex-1 justify-center items-center gap-[20px] xl:gap-[40px] h-full px-[20px]'>
            <NavLink to='/' className={navClass}>Услуги</NavLink>
            <NavLink to='/price' className={navClass}>Прайс</NavLink>
            {/* <NavLink to='/reviews' className={navClass}>Отзывы</NavLink> */}
            <NavLink to='/about-us' className={navClass}>О&nbsp;нас</NavLink>
            <NavLink to='/contacts' className={navClass}>Контакты</NavLink>
          </nav>

          {/* Правая часть: LanguageSelect (десктоп) + Начать (оба) */}
          <div className='flex items-center gap-[10px] h-full'>
            <div className='hidden lg:block'>
              <LanguageSelect />
            </div>
            <NavLink to='/request' className='bg-black text-white text-[16px] font-semibold py-[13px] lg:py-[15px] px-[22px] rounded-[8px] hover:opacity-70 transition'>
              Начать
            </NavLink>
          </div>

        </div>
      </div>

      {/* затемнение фона при открытом меню */}
      <div
        className={`fixed inset-0 bg-black/40 z-[998] lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
      />

      {/* мобильное меню — выдвижная панель слева */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[344px] bg-white z-[999] flex flex-col lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* верхняя строка: X (закрыть) + LanguageSelect */}
        <div className='h-[64px] px-[16px] flex items-center justify-between border-b border-[#D8D8D8] shrink-0'>
          <button
            className='text-black p-[6px] rounded-[8px] hover:bg-gray-100 transition cursor-pointer'
            onClick={close}
          >
            <FiX size={26} />
          </button>
          <LanguageSelect />
        </div>

        {/* навигация */}
        <nav className='flex flex-col px-[16px] pt-[8px]'>
          <NavLink to='/' className={mobileNavClass} onClick={close}>Услуги</NavLink>
          <NavLink to='/price' className={mobileNavClass} onClick={close}>Прайс</NavLink>
          {/* <NavLink to='/reviews' className={mobileNavClass} onClick={close}>Отзывы</NavLink> */}
          <NavLink to='/about-us' className={mobileNavClass} onClick={close}>О нас</NavLink>
          <NavLink to='/contacts' className={mobileNavClass} onClick={close}>Контакты</NavLink>
        </nav>
      </div>
    </>
  )
}

export default Header
