import React from 'react'
import { FiKey, FiMessageSquare, FiXCircle, FiShield } from 'react-icons/fi'

const services = [
  {
    Icon: FiKey,
    title: 'Если ваш пароль не работает',
    text: 'Вы думали, что знаете свой пароль, но теперь он не разблокирует ваш кошелек. Возможно, в нем используются другие цифры или другая заглавная буква, чем вы помните.',
  },
  {
    Icon: FiMessageSquare,
    title: 'Частичное восстановление исходной фразы',
    text: 'Вы записали список слов, а парольная фраза — это некая комбинация этих слов.',
  },
  {
    Icon: FiXCircle,
    title: 'Потеряли доступ к кошельку крупной сети',
    text: 'Вы потеряли доступ к обычному криптоактиву, такому как Bitcoin, Ethereum, Litecoin, Dogecoin, NFT или десяткам других альткоинов.',
  },
  {
    Icon: FiShield,
    title: 'Вас обманули мошенники',
    text: 'Мы предлагаем услуги по розыску (а не по взысканию) для тех, кто хочет построить своё дело и, возможно, раскрыть реальную личность мошенника.',
  },
]

const Block_services = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[80px] lg:mt-[200px] flex flex-col gap-[20px] lg:gap-[40px]">

      <h2 className="mx-auto font-inter font-semibold text-[24px] lg:text-[50px] text-black leading-none tracking-normal text-center">
        Мы поможем вам, если
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[10px]">
        {services.map(({ Icon, title, text }, idx) => (
          <div
            key={idx}
            className="group bg-[#F5F7FA] hover:bg-gradient-to-br hover:from-[#D4151C] hover:to-[#D35400] rounded-[20px] p-[16px] lg:p-[30px] flex flex-col gap-[20px] justify-between h-[268px] lg:h-[275px] transition-colors duration-300 cursor-pointer"
          >
            {/* иконка */}
            <div className="w-[60px] h-[60px] rounded-full bg-[#FDE9E6] flex items-center justify-center shrink-0">
              <Icon size={22} className="text-[#D4151C]" />
            </div>

            <h3 className="font-inter font-medium text-[18px] lg:text-[24px] text-black leading-none tracking-normal group-hover:text-white transition-colors duration-300">
              {title}
            </h3>

            <p className="font-inter font-normal text-[16px] text-[#6F6F6F] leading-none tracking-normal group-hover:text-white transition-colors duration-300">
              {text}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Block_services
