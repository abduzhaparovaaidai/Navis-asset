import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom'
import { url } from '../components/Partners'

const SmallCard = ({ el }) => (
  <NavLink
    to={`/news-details/${el.id}`}
    className="flex items-start gap-[20px]"
  >
    <img
      src={el.image}
      alt={el.title}
      className="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] rounded-[14px] object-cover object-center shrink-0"
    />
    <div className="flex flex-col justify-between flex-1 gap-[16px] min-h-[80px] lg:min-h-[105px]">
      <h4 className="font-inter font-medium text-[16px] lg:text-[18px] text-black leading-none">
        {el.title}
      </h4>
      <p className="font-inter font-normal text-[14px] text-[#6F6F6F] leading-none">
        {el.date}
      </p>
    </div>
    <div className="w-[40px] h-[40px] rounded-full bg-[#FDE9E6] flex items-center justify-center shrink-0 self-end">
      <FiArrowUpRight size={20} className="text-[#D4151C]" />
    </div>
  </NavLink>
)

const NewsPage = () => {
  const navigate = useNavigate()
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await axios.get(`${url}news-list/`)
        setNewsList(response.data)
      } catch (error) {
        console.log('Ошибка при получении новостей!')
      }
    }
    fetchNewsList()
  }, [])

  const bigCard  = newsList[0]
  const allSmall = newsList.slice(1)

  // Справа 4 карточки, снизу остальные (всегда чётное кол-во)
  let rightCards  = allSmall.slice(0, 4)
  let bottomCards = allSmall.slice(4)
  if (bottomCards.length % 2 !== 0 && bottomCards.length > 0) {
    rightCards  = [...rightCards, bottomCards[0]]
    bottomCards = bottomCards.slice(1)
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[40px] mb-[80px] lg:mb-[120px]">

      {/* Кнопка назад */}
      <button
        onClick={() => navigate(-1)}
        className="w-[40px] h-[40px] rounded-full bg-[#F5F7FA] flex items-center justify-center cursor-pointer hover:bg-[#E8E8E8] transition-colors duration-200 mb-[20px] lg:mb-[30px]"
      >
        <FiArrowLeft size={20} className="text-black" />
      </button>

      <div className="flex flex-col gap-[20px]">

        {/* Верхняя секция (advantages): большая карточка слева + 4 маленьких справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">

          {bigCard && (
            <NavLink
              to={`/news-details/${bigCard.id}`}
              className="flex flex-col gap-[20px]"
            >
              <div className="h-[220px] lg:h-[400px] overflow-hidden rounded-[14px]">
                <img
                  src={bigCard.image}
                  alt={bigCard.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex items-end gap-[20px]">
                <div className="flex flex-col gap-[16px] flex-1">
                  <h4 className="font-inter font-medium text-[16px] lg:text-[18px] text-black leading-none">
                    {bigCard.title}
                  </h4>
                  <p className="font-inter font-normal text-[14px] text-[#6F6F6F] leading-none">
                    {bigCard.date}
                  </p>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#FDE9E6] flex items-center justify-center shrink-0">
                  <FiArrowUpRight size={20} className="text-[#D4151C]" />
                </div>
              </div>
            </NavLink>
          )}

          {/* Правая колонка — 4 маленьких (Frame 16 / advantages) */}
          <div className="flex flex-col gap-[20px] lg:gap-[30px]">
            {rightCards.map((el, idx) => (
              <SmallCard key={el.id ?? idx} el={el} />
            ))}
          </div>

        </div>

        {/* Нижняя секция: 2 колонки × 2 карточки (Frame 17 + Frame 18) */}
        {bottomCards.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[30px]">
            {bottomCards.map((el, idx) => (
              <SmallCard key={el.id ?? idx} el={el} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default NewsPage
