import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export const url = 'https://navis-asset.onrender.com/api/';

const Partners = () => {
  const [partnersList, setPartnersList] = useState([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const fetchPartnersList = async () => {
      try {
        const response = await axios.get(`${url}partner-list/`);
        setPartnersList(response.data);
      } catch (error) {
        console.log('Ошибка при получении лого!');
      }
    };
    fetchPartnersList();
  }, []);

  // Дублирую список для бесконечного скролла
  const duplicated = [...partnersList, ...partnersList];

  return (
    <div className="w-full overflow-hidden mt-[100px] lg:mt-[130px] h-[42px] lg:h-[90px] flex items-center p-px ">
      <div
        ref={trackRef}
        className="flex items-center gap-[56px] lg:gap-[130px]"
        style={{
          animation: 'scroll-partners 20s linear infinite',
          width: 'max-content',
        }}
      >
        {duplicated.map((el, id) => (
          <div
            key={id}
            className="flex-shrink-0 flex items-center justify-center w-[135px] h-[36px] lg:w-auto lg:h-auto"
          >
            <img
              src={el.image}
              alt={`Partner ${id}`}
              className="block w-full h-full lg:w-auto lg:max-h-[90px] object-contain object-center"
            />
          </div>
        ))}
      </div>

      {/* CSS анимация через style-тег, Tailwind не поддерживает keyframes напрямую */}
      <style>{`
        @keyframes scroll-partners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Partners;
