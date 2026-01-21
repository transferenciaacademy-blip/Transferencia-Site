import React from 'react';
import MarqueeBanner from './MarqueeBanner';

const CrossedBanners = ({ messages1, messages2 }) => {
  return (
    <div className="relative h-[300px] overflow-visible bg-transparent -my-32 z-20">
      {/* Container para as faixas cruzadas */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Faixa Dourada - diagonal da esquerda superior para direita inferior (/) */}
        <div className="absolute w-[160%] origin-center" style={{ transform: 'rotate(-6deg)' }}>
          <MarqueeBanner 
            messages={messages1} 
            bgColor="bg-[#D4A017]"
            textColor="text-[#0A1A40]"
            direction="left"
          />
        </div>

        {/* Faixa Azul - diagonal da direita superior para esquerda inferior (\) */}
        <div className="absolute w-[160%] origin-center" style={{ transform: 'rotate(6deg)' }}>
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
