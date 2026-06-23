import React from 'react'
import buildingImg  from '../assets/building.jpg'
import employeesImg from '../assets/employees.jpg'
import founderImg   from '../assets/founder.jpg'

const gradient = { background: 'linear-gradient(135deg, #D4151C 0%, #D35400 100%)' }

const AboutUs = () => (
  <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[40px] mb-[80px] lg:mb-[120px]">

    {/* Title */}
    <h1 className="font-inter font-semibold text-[24px] lg:text-[50px] text-black leading-none text-center mb-[20px] lg:mb-[30px]">
      О Navis Asset
    </h1>

    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[10px]">

      {/* основатель */}
      <div className="flex flex-col gap-[10px] lg:h-[300px]">

        <div className="flex flex-row gap-[10px] h-[100px] lg:h-auto lg:flex-1">

          <div className="flex-1 rounded-[12px] bg-[#F5F7FA] p-[16px] flex flex-row items-center gap-[10px]">
            <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0">
              <img src={founderImg} alt="Тилек Бегалиев" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="font-inter font-normal text-[12px] text-[#797979] leading-none">
                Основатель:
              </p>
              <p className="font-inter font-semibold text-[13px] lg:text-[14px] text-black leading-tight">
                Тилек Бегалиев
              </p>
            </div>
          </div>

          {/* 45+ клиентов */}
          <div className="flex-1 rounded-[12px] p-[20px] flex flex-col justify-between" style={gradient}>
            <span className="font-inter font-bold text-[32px] lg:text-[42px] text-white leading-none">
              45+
            </span>
            <p className="font-inter font-normal text-[13px] text-white leading-tight">
              Довольных клиентов
            </p>
          </div>

        </div>

        {/* 100% качество */}
        <div className="h-[100px] lg:h-auto lg:flex-1 rounded-[12px] bg-[#F5F7FA] p-[20px] flex flex-row items-center gap-[14px]">
          <span className="font-inter font-bold text-[32px] lg:text-[42px] text-black leading-none whitespace-nowrap">
            100%
          </span>
          <p className="font-inter font-normal text-[13px] lg:text-[14px] text-[#797979] leading-tight">
            Качественная работа
          </p>
        </div>

      </div>

      {/* фото здания */}
      <div className="h-[200px] lg:h-[300px] rounded-[20px] overflow-hidden">
        <img src={buildingImg} alt="Здание" className="w-full h-full object-cover" />
      </div>

      {/* фото сотрудников */}
      <div className="h-[200px] lg:h-[300px] rounded-[20px] overflow-hidden">
        <img src={employeesImg} alt="Команда" className="w-full h-full object-cover" />
      </div>

      {/* 10+ профессионалов и Гарантия */}
      <div className="flex flex-row gap-[10px] h-[200px] lg:h-[300px]">

        {/* 10+ professionals */}
        <div className="flex-1 rounded-[12px] bg-black p-[20px] flex flex-col justify-between">
          <span className="font-inter font-bold text-[36px] lg:text-[56px] text-white leading-none">
            10+
          </span>
          <p className="font-inter font-normal text-[13px] lg:text-[14px] text-white leading-tight">
            Профессиональных сотрудников команды
          </p>
        </div>

        {/* Гарантия */}
        <div className="flex-1 rounded-[12px] bg-[#F5F7FA] p-[20px] flex flex-col justify-between">
          <span className="font-inter font-bold text-[28px] lg:text-[40px] text-black leading-none">
            Гарантия
          </span>
          <p className="font-inter font-normal text-[13px] lg:text-[14px] text-[#797979] leading-tight">
            Профессиональных сотрудников команды
          </p>
        </div>

      </div>

    </div>

    {/* О гарантии */}
    <div className="mt-[60px] lg:mt-[100px] flex flex-col gap-[60px] lg:gap-[80px]">

      {/* гарантия текст */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-[23px] lg:gap-0">
        <h2 className="font-inter font-semibold text-[24px] lg:text-[30px] text-black leading-tight w-full lg:w-[457px] shrink-0">
          Гарантируем, что ваша криптовалюта всегда остается у вас
        </h2>
        <p className="font-inter font-normal text-[20px] text-[#6F6F6F] leading-[1.4] w-full lg:w-[660px]">
          Методы, которые мы используем для восстановления учетных записей наших клиентов, сильно различаются в зависимости от конкретного случая. В случае восстановления пароля мы проводим наших клиентов через извлечение резервной копии зашифрованного закрытого ключа и составление полного списка возможных вариантов паролей. Затем мы передаем данные клиента на защищенные серверы для взлома паролей, которые используют полученные от клиента данные для перебора миллиардов или триллионов возможных комбинаций паролей, пока не будет найден правильный пароль.
        </p>
      </div>

      {/* текст об основателях */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-[23px] lg:gap-0">
        <h2 className="font-inter font-semibold text-[24px] lg:text-[30px] text-black leading-tight w-full lg:w-[457px] shrink-0">
          О наших основателях
        </h2>
        <p className="font-inter font-normal text-[20px] text-[#6F6F6F] leading-[1.4] w-full lg:w-[660px]">
          CryptoAssetRecovery.com был создан для того, чтобы помочь владельцам криптовалюты обезопасить свои активы. Компания была основана в 2017 году Крисом Бруксом, опытным профессионалом в области технологий с богатым опытом в индустрии. Ранее он был вице-президентом технологий в Carescout и программистом в Fidelity Investments. В 2021 году компания стала семейным бизнесом, когда к команде присоединился сын Криса, Чарльз. Чарльз — студент компьютерных наук в Университете Вермонта, который приносит свежий взгляд и обширные технические знания на стол. Вместе Крис и Чарльз являются лидерами в области восстановления криптовалютных активов, помогая привнести масштабное принятие криптовалют в мир. Сегодня мы гордимся тем, что находимся на передовой этой захватывающей и быстро развивающейся индустрии. Не позволяйте забытому паролю лишить вас ваших цифровых богатств. Доверьтесь нам быть вашими крипто-шерифами, на миссии по восстановлению ваших потерянных активов.
        </p>
      </div>

    </div>
  </div>
)

export default AboutUs
