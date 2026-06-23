import React from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionFaq = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className="border-b border-[#D8D8D8] cursor-pointer py-[20px] lg:py-[30px]"
      onClick={onClick}
    >
      {/* строка: вопрос + кнопка */}
      <div className="flex items-center justify-between gap-[20px] lg:gap-[100px]">
        <h3 className="font-inter font-semibold text-[18px] lg:text-[30px] text-black leading-none tracking-normal">
          {question}
        </h3>

        <button
          className="shrink-0 w-[40px] h-[40px] rounded-full bg-[#FDE9E6] hover:bg-[#FCCAC7] flex items-center justify-center transition-colors duration-200 cursor-pointer"
          onClick={(e) => { e.stopPropagation(); onClick() }}
        >
          {isOpen
            ? <FiMinus size={18} className="text-[#D4151C]" />
            : <FiPlus size={18} className="text-[#D4151C]" />
          }
        </button>
      </div>

      {/* ответ — разворачивается вниз */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] mt-[16px] lg:mt-[20px]' : 'max-h-0'}`}>
        <p className="font-inter font-normal text-[16px] lg:text-[20px] text-[#6F6F6F] leading-relaxed tracking-normal pb-[4px]">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default AccordionFaq
