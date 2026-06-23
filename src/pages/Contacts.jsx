import React, { useState } from 'react'
import { BsGeoAlt } from 'react-icons/bs'
import { MdOutlinePhone, MdMailOutline } from 'react-icons/md'
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa'
import { PiInstagramLogoBold } from 'react-icons/pi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { url } from '../components/Partners'

const gradientBg = { background: 'linear-gradient(135deg, #D4151C 0%, #D35400 100%)' }

const socials = [
  { Icon: IoLogoWhatsapp,      href: '#' },
  { Icon: FaTelegramPlane,     href: '#' },
  { Icon: PiInstagramLogoBold, href: '#' },
  { Icon: FaTiktok,            href: '#' },
]

const inputCls  = "w-full h-[50px] rounded-[8px] bg-white border border-[#E8E8E8] px-[16px] font-inter font-normal text-[14px] text-black placeholder:text-[#BDBDBD] outline-none focus:border-[#D4151C] transition-colors"
const selectCls = inputCls + " appearance-none cursor-pointer"
const labelCls  = "font-inter font-normal text-[14px] text-black leading-none"

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-[10px] flex-1">
    <label className={labelCls}>{label}</label>
    {children}
  </div>
)

const SelectField = ({ label, name, value, onChange, placeholder, options }) => (
  <Field label={label}>
    <div className="relative">
      <select name={name} value={value} onChange={onChange} className={selectCls}>
        <option value="" disabled>{placeholder}</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <span className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none text-[#6F6F6F] text-[12px]">▾</span>
    </div>
  </Field>
)

const Contacts = () => {
  const [form, setForm] = useState({
    name: '', surname: '', country: '', email: '',
    phone: '', recovery_types: '', wallet_type: '', wallet_volume: '',
    agreement: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${url}applications/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        alert('Заявка успешно отправлена!')
        setForm({ name: '', surname: '', country: '', email: '', phone: '', recovery_types: '', wallet_type: '', wallet_volume: '', agreement: false })
      } else {
        alert('Ошибка при отправке формы')
      }
    } catch {
      alert('Не удалось отправить данные.')
    }
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[40px] mb-[80px] lg:mb-[120px]">
      <div className="flex flex-col lg:flex-row gap-[10px]">

        {/* левая карточка */}
        <div
          className="w-full lg:w-[564px] shrink-0 rounded-[16px] lg:rounded-[30px] p-[16px] lg:p-[30px] flex flex-col justify-between gap-[40px] lg:gap-0"
          style={gradientBg}
        >
          <div className="flex flex-col gap-[40px] lg:gap-[60px]">
            <h2 className="font-inter font-semibold text-[24px] lg:text-[30px] text-white leading-tight max-w-[296px] lg:max-w-[504px]">
              Техническая поддержка, сотрудничество и PR
            </h2>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-row items-start gap-[16px]">
                <BsGeoAlt size={20} className="text-white shrink-0 mt-[2px]" />
                <p className="font-inter font-normal text-[14px] text-white leading-tight">
                  Кыргызская республика, г.Бишкек, Проспект Манаса 64/1
                </p>
              </div>
              <div className="flex flex-row items-start gap-[16px]">
                <MdOutlinePhone size={20} className="text-white shrink-0 mt-[2px]" />
                <div className="flex flex-col gap-[4px]">
                  <p className="font-inter font-normal text-[14px] text-white leading-none">+996 (502)-800-202</p>
                  <p className="font-inter font-normal text-[14px] text-white leading-none">+996 (502)-800-202</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-[16px]">
                <MdMailOutline size={20} className="text-white shrink-0" />
                <p className="font-inter font-normal text-[14px] text-white leading-none">navisasset@mail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h5 className="font-inter font-semibold text-[16px] text-white leading-none">Мы в соцсетях</h5>
              <div className="flex flex-row gap-[12px]">
                {socials.map(({ Icon, href }, idx) => (
                  <a key={idx} href={href}
                    className="w-[40px] h-[40px] rounded-[10px] bg-white flex items-center justify-center text-[#D4151C] hover:opacity-80 transition-opacity duration-200">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[1.4] max-w-[504px]">
            Если у Вас возникли вопросы технического или финансового плана, напишите нам и мы поможем Вам в решении вашего вопроса. Мы отвечаем на вопросы в течение 15-60 минут, в зависимости от загрузки сервиса.
          </p>
        </div>

        {/* правая карточка: форма */}
        <div className="flex-1 rounded-[16px] lg:rounded-[30px] bg-[#F5F7FA] p-[16px] lg:p-[30px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">

            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[10px]">
              <Field label="Имя">
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Имя" className={inputCls} />
              </Field>
              <Field label="Фамилия">
                <input name="surname" value={form.surname} onChange={handleChange} type="text" placeholder="Фамилия" className={inputCls} />
              </Field>
            </div>

            <SelectField label="Страна" name="country" value={form.country} onChange={handleChange}
              placeholder="Выберите страну"
              options={['Кыргызстан', 'Россия', 'Казахстан', 'Беларусь', 'Другая']} />

            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[10px]">
              <Field label="Почта">
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Электронная почта" className={inputCls} />
              </Field>
              <Field label="Номер телефона">
                <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+996 502 800 202" className={inputCls} />
              </Field>
            </div>

            <SelectField label="Тип восстановления" name="recovery_types" value={form.recovery_types} onChange={handleChange}
              placeholder="Выберите тип восстановления"
              options={['Пароль', 'Seed-фраза', 'Приватный ключ', 'Другое']} />

            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[10px]">
              <SelectField label="Вид кошелька" name="wallet_type" value={form.wallet_type} onChange={handleChange}
                placeholder="Выберите тип"
                options={['Bitcoin', 'Ethereum', 'Solana', 'Другой']} />
              <Field label="Объём кошелька">
                <input name="wallet_volume" value={form.wallet_volume} onChange={handleChange} type="text" placeholder="Объём кошелька" className={inputCls} />
              </Field>
            </div>

            <div className="flex flex-row items-start gap-[8px]">
              <input type="checkbox" name="agreement" checked={form.agreement} onChange={handleChange}
                className="w-[18px] h-[18px] mt-[2px] shrink-0 cursor-pointer accent-[#D4151C]" />
              <p className="font-inter font-normal text-[12px] text-[#6F6F6F] leading-[1.4]">
                Нажимая на кнопку «Отправить заявку», я принимаю условия{' '}
                <a href="#" className="text-[#D4151C] underline">Пользовательского соглашения</a>
              </p>
            </div>

            <button type="submit"
              className="w-full h-[50px] rounded-[8px] font-inter font-semibold text-[16px] text-white hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              style={gradientBg}>
              Отправить заявку
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contacts
