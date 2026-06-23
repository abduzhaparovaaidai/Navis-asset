import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { url } from '../components/Partners'

// Converts plain text with \r\n to HTML.
// Lines wrapped in curly quotes like 'Заголовок' become <h3>.
function processText(text) {
  if (!text) return ''
  if (/<[a-z][\s\S]*>/i.test(text)) return text // already HTML
  return text
    .split(/\r?\n/)
    .filter(line => line.trim())
    .map(line => {
      const t = line.trim()
      if (t.startsWith('‘') && t.endsWith('’')) {
        return `<h3>${t.slice(1, -1)}</h3>`
      }
      return `<p>${t}</p>`
    })
    .join('')
}

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [news, setNews]       = useState(null)
  const [related, setRelated] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const load = async () => {
      try {
        const { data } = await axios.get(`${url}news-list/`)
        const found = data.find(n => n.id === Number(id))
        setNews(found ?? null)
        setRelated(data.filter(n => n.id !== Number(id)).slice(0, 4))
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [id])

  if (!news) return (
    <div className="flex justify-center items-center min-h-[200px]">
      <p className="font-inter text-[16px] text-[#6F6F6F]">Загрузка...</p>
    </div>
  )

  const articleHtml = processText(news.text || news.content || news.description || '')

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[40px] mb-[80px] lg:mb-[120px]">

      {/* Кнопка назад */}
      <button
        onClick={() => navigate(-1)}
        className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] rounded-full bg-[#F5F7FA] flex items-center justify-center hover:bg-[#E8E8E8] transition-colors duration-200 cursor-pointer mb-[30px]"
      >
        <FiArrowLeft size={20} className="text-black" />
      </button>

      {/*
        Mobile:  flex-col, gap-100px — 3 sections separated by 100px
        Desktop: grid [661px 1fr], gap-20px — left col + right col side by side
        Child 2 (article text) is lg:hidden so it doesn't participate in the desktop grid
      */}
      <div className="flex flex-col gap-[100px] lg:grid lg:grid-cols-[661px_1fr] lg:gap-[20px]">

        {/* Child 1 — Big container: title + date + image */}
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-inter font-semibold text-[24px] lg:text-[30px] text-black leading-none">
            {news.title}
          </h1>
          <p className="font-inter font-normal text-[14px] text-[#6F6F6F] leading-none">
            {news.date}
          </p>
          <div className="overflow-hidden rounded-[14px] lg:rounded-[20px]">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[240px] lg:h-[440px] object-cover object-center"
            />
          </div>
        </div>

        {/* Child 2 — Article text: mobile only, shown between image and recommendations */}
        {articleHtml && (
          <div
            className="lg:hidden news-content"
            dangerouslySetInnerHTML={{ __html: articleHtml }}
          />
        )}

        {/* Child 3 — Recommendations: Читать также + 4 cards */}
        <div className="flex flex-col gap-[20px] lg:gap-[30px]">
          <h3 className="font-inter font-semibold lg:font-bold text-[24px] text-[#1C1C1C] leading-none">
            Читать также:
          </h3>
          {related.map((item, idx) => (
            <NavLink
              key={item.id ?? idx}
              to={`/news-details/${item.id}`}
              className="flex items-start gap-[20px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] rounded-[14px] object-cover object-center shrink-0"
              />
              <div className="flex flex-col justify-between flex-1 gap-[16px] min-h-[80px] lg:min-h-[105px]">
                <h4 className="font-inter font-medium text-[16px] lg:text-[18px] text-black leading-none">
                  {item.title}
                </h4>
                <p className="font-inter font-normal text-[14px] text-[#6F6F6F] leading-none">
                  {item.date}
                </p>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#FDE9E6] flex items-center justify-center shrink-0 self-end">
                <FiArrowUpRight size={20} className="text-[#D4151C]" />
              </div>
            </NavLink>
          ))}
        </div>

      </div>

      {/* Desktop article text — below the grid, max-w-[661px] per Figma */}
      {articleHtml && (
        <div
          className="hidden lg:block mt-[40px] max-w-[661px] news-content"
          dangerouslySetInnerHTML={{ __html: articleHtml }}
        />
      )}

    </div>
  )
}

export default NewsDetail
