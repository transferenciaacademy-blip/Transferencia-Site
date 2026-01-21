import React from 'react';

const MarqueeBanner = ({ messages }) => {
  // Duplicar mensagens para efeito contínuo
  const repeatedMessages = [...messages, ...messages, ...messages];

  return (
    <div className="relative overflow-hidden bg-[#D4A017] py-4 border-y-2 border-[#B8900F]">
      <div className="marquee-container">
        <div className="marquee-content">
          {repeatedMessages.map((message, index) => (
            <span key={index} className="marquee-item">
              <span className="text-[#0A1A40] font-bold text-lg md:text-xl">
                {message}
              </span>
              <span className="mx-8 text-[#0A1A40] text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
