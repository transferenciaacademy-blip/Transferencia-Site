import React from 'react';

const MarqueeBanner = ({ messages, bgColor = "bg-[#D4A017]", textColor = "text-[#0A1A40]", direction = "left" }) => {
  // Duplicar mensagens para efeito contínuo
  const repeatedMessages = [...messages, ...messages, ...messages];

  return (
    <div className={`relative overflow-hidden ${bgColor} py-4 border-y-2 ${bgColor === 'bg-[#D4A017]' ? 'border-[#B8900F]' : 'border-[#D4A017]/30'}`}>
      <div className="marquee-container">
        <div className={`marquee-content ${direction === 'right' ? 'marquee-reverse' : ''}`}>
          {repeatedMessages.map((message, index) => (
            <span key={index} className="marquee-item">
              <span className={`${textColor} font-bold text-lg md:text-xl`}>
                {message}
              </span>
              <span className={`mx-8 ${textColor} text-2xl`}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
