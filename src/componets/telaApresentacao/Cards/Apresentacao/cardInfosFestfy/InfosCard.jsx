import React, { useEffect, useRef, useState } from 'react';
import './InfosCard.css';

// Componente de Contagem (Mesma lógica anterior)
const CountUp = ({ end, duration = 2000, isCurrency = false, startAnimation }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!startAnimation) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(progress * end);
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }, [end, duration, startAnimation]);

    if (isCurrency) return count.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return Math.floor(count).toLocaleString('pt-BR');
};

// O SEU SVG Personalizado
const CustomFeetIcons = () => (
    <div className="feet-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50" height="50">
            {/* PÉ ESQUERDO - CINZA CLARO */}
            <path d="M120,202.1S68.77,49.39,157.67,4.42c0,0,50.22-20.91,75.32,28.25,0,0,26.15,49.15-14.66,157.91Z" fill="#D1D5DB"/>
            <path d="M129.43,239.75l89.95-9.41s36.62,86.8-18.82,108.77C200.56,339.11,128.38,352.72,129.43,239.75Z" fill="#D1D5DB"/>
            
            {/* PÉ DIREITO - AMARELO */}
            <path d="M371.93,389.39s78.55-140.61-.54-201.22c0,0-45.44-29.83-79.19,13.85,0,0-34.78,43.48-14.78,157.92Z" fill="#FFD700"/>
            <path d="M355.7,424.66,269,398.81s-52,78.56-1.57,110.39C267.47,509.2,335.9,535.87,355.7,424.66Z" fill="#FFD700"/>
        </svg>
    </div>
);

function InfosCard() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('animate-start');
                }
            }, { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="infos-page" ref={sectionRef}>
            <div className="container_infos">
                <div className="container_infos_left">
                    <h2 className="infos-text">
                        <span className="gradient-text">Comece seu evento</span>
                        <div className="line-with-icons">
                            <span className="gradient-text">com o pé direito</span>
                            <CustomFeetIcons />
                        </div>
                    </h2>
                    <div className="yellow-underline-detail"></div>
                </div>

                <div className="container_infos_right">
                    <div className="info-stat-box">
                        <div className="stat-number-wrapper">
                            <span className="stat-plus">R$</span>
                            <span className="stat-number gradient-text">
                                <CountUp end={18000} isCurrency={true} startAnimation={isVisible} />
                            </span>
                            <span className="stat-plus">+</span>
                        </div>
                        <p className="stat-description">Já foram transacionados aqui</p>
                    </div>

                    <div className="info-stat-box">
                        <div className="stat-number-wrapper">
                            <span className="stat-plus">+</span>
                            <span className="stat-number gradient-text">
                                <CountUp end={400} startAnimation={isVisible} />
                            </span>
                        </div>
                        <p className="stat-description">pessoas já compraram aqui</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfosCard;