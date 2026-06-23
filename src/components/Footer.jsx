import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logoNavisAsset.svg'
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa'
import { PiInstagramLogoBold } from 'react-icons/pi'
import { IoLogoWhatsapp } from 'react-icons/io'

const emailGradient = {
  background: 'linear-gradient(90deg, #D4151C 0%, #D35400 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const iconGradient = {
  background: 'linear-gradient(135deg, #D4151C 0%, #D35400 100%)',
}

const navMain = [
  { label: 'О нас',            to: '/about-us' },
  { label: 'Контакты',         to: '/contacts' },
  { label: 'Партнеры',         to: '/' },
  { label: 'Почему NavisAsset?', to: '/' },
]

const navUser = [
  { label: 'Услуги',   to: '/' },
  { label: 'Отзывы',   to: '/reviews' },
  { label: 'Прайс',    to: '/price' },
  { label: 'Новости',  to: '/news' },
]

const socials = [
  { Icon: IoLogoWhatsapp,    href: '#' },
  { Icon: FaTelegramPlane,   href: '#' },
  { Icon: PiInstagramLogoBold, href: '#' },
  { Icon: FaTiktok,          href: '#' },
]

const NavColumn = ({ title, links }) => (
  <div className="flex flex-col gap-[30px]">
    <h5 className="font-inter font-semibold text-[16px] text-black leading-none">
      {title}
    </h5>
    <div className="flex flex-col gap-[16px]">
      {links.map(({ label, to }) => (
        <NavLink
          key={label}
          to={to}
          className="font-inter font-normal text-[14px] lg:text-[16px] text-[#797979] leading-none hover:text-[#D4151C] transition-colors duration-200"
        >
          {label}
        </NavLink>
      ))}
    </div>
  </div>
)

const Footer = () => (
  <footer className="w-full bg-[#F5F7FA]">

    {/* Main content */}
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[40px] lg:gap-0 pt-[40px] lg:pt-[46px] pb-[30px] lg:pb-[40px]">

        {/* Brand: logo + description + email */}
        <div className="flex flex-col">
          <div className="flex items-center gap-[16px] mb-[20px]">
            <img src={logo} alt="Navis Asset" className="h-[55px] w-auto" />
          </div>
          <p className="font-inter font-normal text-[16px] text-[#797979] leading-[1.3] max-w-[324px] mb-[30px]">
            Это международный сервис, где вам быстро и надежно восстановят ваш забытый криптокошелёк
          </p>
          <a
            href="mailto:navisasset@mail.com"
            className="font-inter font-medium text-[24px] leading-none uppercase"
            style={emailGradient}
          >
            navisasset@mail.com
          </a>
        </div>

        {/* Navigation: Основное + Пользователям side by side */}
        <div className="flex flex-row gap-[25px] lg:gap-[82px]">
          <NavColumn title="Основное"       links={navMain} />
          <NavColumn title="Пользователям"  links={navUser} />
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-[20px] lg:gap-[30px]">
          <h5 className="font-inter font-semibold text-[16px] text-black leading-none">
            Мы в соцсетях
          </h5>
          <div className="flex flex-row gap-[12px]">
            {socials.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-200"
                style={iconGradient}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* Divider — прямой потомок footer, растягивается на всю ширину */}
    <div className="w-full h-[1px] bg-[#D8D8D8]" />

    {/* Bottom bar */}
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-[16px] lg:py-[18px] gap-[10px] lg:gap-0">
        <p className="font-inter font-normal text-[10px] lg:text-[12px] text-[#9A9A9A] leading-[1.12]">
          © 2024 NavisAsset Все права защищены
        </p>
        <p className="font-inter font-semibold text-[14px] text-[#171616] leading-[1.2]">
          Made with ❤️ by <span className="text-[#D4151C]">NavisDevs</span>
        </p>
      </div>
    </div>

  </footer>
)

export default Footer
