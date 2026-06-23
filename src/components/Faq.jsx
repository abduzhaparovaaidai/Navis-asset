import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AccordionFaq from './AccordionFaq'
import { url } from './Partners'

const Faq = () => {
  const [accordionAnswers, setAccordionAnswers] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await axios.get(`${url}faq-list/`)
        setAccordionAnswers(response.data)
      } catch (error) {
        console.log('Ошибка при загрузке FAQ')
      }
    }
    fetchFaq()
  }, [])

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px] lg:px-[150px] mt-[80px] lg:mt-[200px]">

      <div className="flex flex-col gap-[20px] lg:gap-[60px]">

        <h2 className="mx-auto font-inter font-semibold text-[24px] lg:text-[50px] text-black leading-none tracking-normal text-center">
          Ответы на часто задаваемые вопросы
        </h2>

        <div className="border-t border-[#E5E5E5]">
          {accordionAnswers.map((item, index) => (
            <AccordionFaq
              key={item.id ?? index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Faq
