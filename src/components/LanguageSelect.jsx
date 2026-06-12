import React, { useState } from 'react';

export default function LanguageSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('РУС');

  const languages = [
    {
      code: 'РУС',
      label: 'РУС',
      flag: (
        <svg className="w-5 h-3.5 object-cover rounded-sm" viewBox="0 0 9 6">
          <rect fill="#fff" width="9" height="6"/>
          <rect fill="#0039a6" width="9" height="4"/>
          <rect fill="#d52b1e" width="9" height="2"/>
        </svg>
      ),
    },
    {
      code: 'ENG',
      label: 'ENG',
      flag: (
        <svg className="w-5 h-3.5 object-cover rounded-sm" viewBox="0 0 50 30">
          <clipPath id="s">
            <path d="M0,0 v30 h50 v-30 z"/>
          </clipPath>
          <path d="M0,0 v30 h50 v-30 z" fill="#012169"/>
          <path d="M0,0 L50,30 M50,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L50,30 M50,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
          <path d="M25,0 v30 M0,15 h50" stroke="#fff" strokeWidth="10"/>
          <path d="M25,0 v30 M0,15 h50" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      ),
    },
  ];

  const activeLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative inline-block text-left font-sans">
      {/* 
        Убрали h-[50px] и добавили те же py-[15px] и px-[12px], 
        чтобы по высоте кнопка языка идеально совпадала с кнопкой «Начать» 
      */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-[118px] py-[15px] px-[12px] rounded-[8px] gap-[10px] text-[16px] font-semibold text-black hover:bg-gray-100 transition duration-150 focus:outline-none"
      >
        <div className="flex items-center gap-[10px]">
          {activeLanguage?.flag}
          <span className="uppercase tracking-wide">{activeLanguage?.label}</span>
        </div>
        
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          
          <div className="absolute right-0 mt-1 w-[118px] bg-[#F5F7FA] rounded-[8px] shadow-lg border border-gray-200/50 z-20 py-1 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-[10px] w-full py-[10px] px-[12px] text-left text-[16px] transition duration-150
                  ${currentLang === lang.code 
                    ? 'bg-gray-200/60 text-black font-semibold' 
                    : 'text-gray-700 hover:bg-gray-200/40'
                  }`}
              >
                {lang.flag}
                <span>{lang.code}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
