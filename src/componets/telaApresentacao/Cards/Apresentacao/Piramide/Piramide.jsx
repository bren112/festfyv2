import React, { useEffect, useRef, useState } from 'react';
import image from "../../../../../images/piramide_semFundo.png";
import './Piramide.css';

function Piramide() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Quando 20% do componente estiver visível, dispara a animação
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div className={`piramide_page ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <div className="piramide_container">
        
        {/* LADO ESQUERDO: LETREIRO MONUMENTAL */}
        <div className="piramide_content_left">
          <main className="piramide_hero">
            <div className="piramide_text_main">
              <span>PREZAMOS</span>
              <span>MUITO</span>
              <span className="piramide_highlight">PELO LAYOUT</span>
              {/* <span className="piramide_highlight">DAS</span> */}
            </div>
            <p className="piramide_subtitle">
              Assim como as pirâmides dominam o horizonte, o layout do Festfy 
              foi esculpido para ser o monumento visual do seu evento.
            </p>
          </main>
          <button className="button_padrao_piramide">Começar Agora</button>
        </div>

        {/* LADO DIREITO: IMAGEM DA PIRÂMIDE */}
        <div className="piramide_content_right">
          <img src={image} alt="Monumento Festfy" className="piramide_img_monumento" />
        </div>

      </div>
    </div>
  );
}

export default Piramide;