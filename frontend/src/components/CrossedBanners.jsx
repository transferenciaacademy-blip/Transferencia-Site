import React from 'react';
import MarqueeBanner from './MarqueeBanner';

const CrossedBanners = ({ messages1, messages2 }) => {
  return (
    <div className="relative h-[200px] overflow-hidden bg-white">
      {/* Container para as faixas cruzadas */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Faixa Dourada - diagonal da esquerda para direita (/) */}
        <div className="absolute w-[150%] origin-center" style={{ transform: 'rotate(-8deg) translateY(-50px)' }}>
          <MarqueeBanner 
            messages={messages1} 
            bgColor="bg-[#D4A017]"
            textColor="text-[#0A1A40]"
            direction="left"
          />
        </div>

        {/* Faixa Azul - diagonal da direita para esquerda (\) */}
        <div className="absolute w-[150%] origin-center" style={{ transform: 'rotate(8deg) translateY(50px)' }}>
          <MarqueeBanner 
            messages={messages2} 
            bgColor="bg-[#0A1A40]"
            textColor="text-[#D4A017]"
            direction="right"
          />
        </div>
      </div>
    </div>
  );
};

export default CrossedBanners;
