import React from 'react'

const advantages = [
  {
    num: '01',
    title: 'Восстановим ваш заблокированный кошелёк',
    text: 'Наша панель пользователя позволяет вам загружать данные в любое время',
  },
  {
    num: '02',
    title: 'Ваш кошелёк будет защищен воздушной прослойкой',
    text: 'Гарантируем, что резервная копия зашифрованного кошелька будет храниться в сервере',
  },
  {
    num: '03',
    title: 'Ваш забытый пароль будет восстановлен',
    text: 'Наша панель пользователя позволяет вам загружать данные в любое время',
  },
]

const Block_advantages = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[80px] lg:mt-[200px]">

      <h2 className="mx-auto font-inter font-semibold text-[24px] lg:text-[50px] text-black leading-none tracking-normal text-center">
        Почему выбирают Navis Asset?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[10px] mt-[20px] lg:mt-[40px]">
        {advantages.map((item) => (
          <div
            key={item.num}
            className="bg-[#F5F7FA] rounded-[20px] p-[16px] lg:p-[30px] flex flex-col justify-between h-[268px] lg:h-[400px] cursor-pointer"
          >
            <p className="font-inter font-normal text-[16px] text-[#6F6F6F] leading-none tracking-normal">
              {item.text}
            </p>

            <h3 className="font-inter font-medium text-[18px] lg:text-[24px] text-black leading-none">
              {item.title}
            </h3>

            <span className="font-inter font-bold text-[64px] lg:text-[96px] text-[#D4151C] leading-none select-none">
              {item.num}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Block_advantages
