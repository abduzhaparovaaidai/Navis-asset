import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FiArrowUpRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { url } from './Partners'

const NewsBlock = () => {
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

  const bigCard = newsList[0]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[80px] lg:mt-[200px]">
      <div className="flex flex-col gap-[20px] lg:gap-[60px]">

        <h2 className="mx-auto font-inter font-semibold text-[24px] lg:text-[50px] text-black leading-none tracking-normal text-center">
          Новости
        </h2>

        {/* News grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:h-[510px]">

          {/* большая карточка */}
          {bigCard && (
            <NavLink
              to={`/news-details/${bigCard.id}`}
              className="flex flex-col gap-[20px] h-full"
            >
              <div className="h-[200px] lg:flex-1 lg:h-auto overflow-hidden rounded-[14px]">
                <img
                  src={bigCard.image}
                  alt={bigCard.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex items-end gap-[20px]">
                <div className="flex flex-col gap-[16px] flex-1">
                  <h4 className="font-inter font-medium text-[18px] text-black leading-none">
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

          {/* маленькие карточки */}
          <div className="flex flex-col gap-[20px] lg:gap-[30px]">
            {newsList.slice(1, 5).map((el, idx) => (
              <NavLink
                key={el.id ?? idx}
                to={`/news-details/${el.id}`}
                className="flex items-start gap-[20px]"
              >
                <img
                  src={el.image}
                  alt={el.title}
                  className="w-[105px] h-[105px] rounded-[14px] object-cover object-center shrink-0"
                />
                <div className="flex flex-col justify-between flex-1 gap-[20px] min-h-[105px]">
                  <h4 className="font-inter font-medium text-[18px] text-black leading-none">
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
            ))}
          </div>

        </div>

        {/* Подробнее button */}
        <div className="flex justify-center">
          <NavLink
            to="/news"
            className="h-[50px] px-[20px] border border-black rounded-[8px] flex items-center gap-[10px] font-inter font-normal text-[16px] text-black hover:bg-black/5 transition duration-300 cursor-pointer whitespace-nowrap"
          >
            Подробнее
            <FiArrowUpRight size={20} className="text-black" />
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default NewsBlock
