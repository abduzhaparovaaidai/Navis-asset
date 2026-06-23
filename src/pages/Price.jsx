import React from 'react'
import { NavLink } from 'react-router-dom'

const GradientCheck = ({ id }) => (
  <svg width="13.5" height="8.45" viewBox="0 0 13.5 8.45" fill="none">
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="13.5" y2="8.45" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D4151C" />
        <stop offset="100%" stopColor="#D35400" />
      </linearGradient>
    </defs>
    <polyline
      points="1,4.2 4.5,7.45 12.5,1"
      stroke={`url(#${id})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const gradient = { background: 'linear-gradient(135deg, #D4151C 0%, #D35400 100%)' }

const features = [
  'Выделенный сотрудник службы поддержки',
  'Время ответа в течение 24 часов',
  'Опциональная консультация в Zoom',
  'Профессиональная команда',
  'Индивидуальная разработка',
]

const Price = () => (
  <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[40px] mb-[80px] lg:mb-[120px]">
    <div className="flex flex-col lg:flex-row gap-[10px]">

      {/* Left: Info */}
      <div className="w-full lg:flex-1 rounded-[16px] lg:rounded-[30px] bg-[#F5F7FA] p-[16px] lg:p-[30px] flex flex-col gap-[24px]">
        <h1 className="font-inter font-semibold text-[24px] lg:text-[50px] text-black leading-none text-center">
          Прайс
        </h1>
        <p className="font-inter font-normal text-[16px] text-[#6F6F6F] leading-[1.3]">
          Мы понимаем, что доверить нам ваши активы - это серьезное дело. Поэтому мы очень ответственно относимся к нашей работе по восстановлению ваших потерянных активов. Наша экспертиза и знания в области восстановления криптовалютных активов - это то, что отличает нас, и именно это позволяет нам взламывать пароли кошельков, чтобы вы могли вернуть свои активы. Мы также знаем, что процесс восстановления криптовалютных активов часто включает в себя чувствительную личную и финансовую информацию, поэтому мы обрабатываем каждый случай с самым высоким уровнем безопасности и конфиденциальности. За восстановление паролей мы берем комиссию в размере 20% от восстановленных токенов, что отражает ценность, которую мы приносим на стол, благодаря нашей экспертизе и безопасной обработке каждого случая. И вот лучшая часть: наша услуга безопасна! Это означает, что вы платите нам только в случае успешного восстановления ваших активов. Если мы не можем взломать кошелек, вы не платите ни цента. Мы верим в то, что слова должны соответствовать делам, и поэтому мы уверены в наших способностях вернуть ваши активы.
        </p>
      </div>

      {/* Right: Pricing card */}
      <div
        className="w-full lg:flex-1 rounded-[16px] lg:rounded-[30px] p-[16px] lg:p-[30px] flex flex-col justify-between gap-[24px]"
        style={gradient}
      >
        <div className="flex flex-col gap-[24px]">

          <h2 className="font-inter font-medium text-[18px] lg:text-[30px] text-white leading-none">
            Восстановление кошелька
          </h2>

          {/* 25% + subtitle */}
          <div className="flex flex-row items-end gap-[14px]">
            <span className="font-inter font-semibold text-[50px] text-white leading-none">
              25%
            </span>
            <span className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-none mb-[9px]">
              от кошелька
            </span>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-[20px]">
            {features.map((f, i) => (
              <div key={i} className="flex flex-row items-center gap-[10px]">
                <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <GradientCheck id={`cg${i}`} />
                </div>
                <span className="font-inter font-normal text-[14px] lg:text-[16px] text-[#F5F7FA] leading-none">
                  {f}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Button */}
        <NavLink
          to="/request"
          className="w-full h-[50px] rounded-[8px] bg-white flex items-center justify-center font-inter font-semibold text-[16px] text-black hover:opacity-90 transition-opacity duration-200"
        >
          Начать восстановление
        </NavLink>
      </div>

    </div>
  </div>
)

export default Price
