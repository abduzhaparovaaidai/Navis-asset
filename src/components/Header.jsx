import React from 'react'
import { FiMenu, FiChevronDown } from 'react-icons/fi'
import logo from '../assets/logoNavisAsset.svg'
import { NavLink } from 'react-router-dom'
import LanguageSelect from './LanguageSelect.jsx';



const navClass = ({ isActive }) =>
    `relative h-full flex items-center text-[16px] font-normal text-black
    after:content-[''] after:absolute after:left-0 after:bottom-[16px]
    after:h-[6px] after:bg-[#D4151C]
    after:rounded-[8px] after:transition-all after:duration-300
    ${isActive
      ? 'after:w-full'
      : 'after:w-0 hover:after:w-full'
    }`


const Header = () => {
  return (
    // внешняя плашка хедера для фиксации и для размеров хедера
    <div className='fixed top-0 left-0 w-full h-[64px] lg:h-[80px] border-b border-[#D8D8D8] bg-[#FFFFFF] z-50'>
        {/* внутренний контейнер для всего содержимого */}
        <div className='w-[90%] max-w-[1140px] mx-auto h-full flex justify-between items-center'>
            
            {/* левая часть хедера */}
            <div className='flex items-center gap-4 h-full'>

                {/* кнопка бургера(только для телефонов) */}
                <button className='block lg:hidden text-gray-800 hover:text-black transition shrink-0'>
                    <FiMenu size={26} />
                </button>

                {/* логотип */}
                <NavLink to="/" >
                    <img 
                        src={logo}
                        alt="Navis Asset" 
                        className='h-[36px] lg:h-[48px] w-auto'
                    />
                </NavLink>

            </div>
            {/* меню desktop */}
            <nav className='hidden lg:flex items-center gap-[40px] h-full'>
                
                <NavLink to="/" className={navClass}>
                    Услуги
                </NavLink>
                
                <NavLink to="/price" className={navClass}>
                    Прайс
                </NavLink>
                
                <NavLink to="/reviews" className={navClass}>
                    Отзывы
                </NavLink>
                
                <NavLink to="/about-us" className={navClass}>
                    О нас
                </NavLink>
                
                <NavLink to="/contacts" className={navClass}>
                    Контакты
                </NavLink>

            </nav>

            {/* правая часть хедера */}
            <div className='hidden lg:flex items-center gap-[10px] h-full'>
                
                <LanguageSelect />

                <button className='bg-black text-white text-[16px] font-semibold py-[15px] px-[22px] rounded-[8px] hover:opacity-70 transition'>
                    Начать
                </button>
            </div>
        </div>
    </div>

  )
}

export default Header