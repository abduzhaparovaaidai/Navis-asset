import React, { useState } from 'react'
import { BsWallet2 } from 'react-icons/bs'
import { MdOutlineShield, MdCheck } from 'react-icons/md'
import { url } from '../components/Partners'

const gradient = { background: 'linear-gradient(135deg, #D4151C 0%, #D35400 100%)' }
const iconBg = { background: 'rgba(212, 21, 28, 0.1)' }

const features = [
  {
    Icon: BsWallet2,
    title: 'Доверенное восстановление кошелька',
    desc: 'Самое надежное имя в восстановлении цифровых активов с 2017 года.',
  },
  {
    Icon: MdOutlineShield,
    title: 'Безопасное недоступное хранилище',
    desc: 'Вся информация о кошельках и паролях зашифрована и хранится на оффлайн-серверах с воздушным зазором.',
  },
  {
    Icon: MdCheck,
    title: 'Начните совершенно бесплатно',
    desc: 'Гарантия без риска - вы нам не заплатите ни копейки, если мы не сможем восстановить ваш пароль.',
  },
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

const Request = () => {
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

        {/* Left: Feature blocks */}
        <div className="w-full lg:flex-1 flex flex-col gap-[20px]">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-[20px] lg:p-[30px] flex flex-row gap-[20px] lg:flex-1"
            >
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0"
                style={iconBg}
              >
                <Icon size={24} className="text-[#D4151C]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-inter font-medium text-[18px] lg:text-[24px] text-black leading-tight">
                  {title}
                </h3>
                <p className="font-inter font-normal text-[16px] text-[#6F6F6F] leading-[1.3]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Form */}
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

            <button
              type="submit"
              className="w-full h-[50px] rounded-[8px] font-inter font-semibold text-[16px] text-white hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              style={gradient}
            >
              Отправить заявку
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Request
