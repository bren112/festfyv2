import Navbar from '../../componets/telaApresentacao/Navbar/Navbar';
import './Apresentacao.css';
import image from '../../images/personagem_semFundo.png';
import InfosCard from '../../componets/telaApresentacao/Cards/Apresentacao/cardInfosFestfy/InfosCard';
import Piramide from '../../componets/telaApresentacao/Cards/Apresentacao/Piramide/Piramide';
function Apresentacao() {
  return (
    <div className="apresentacao-page">

    <Navbar />

    <div className="container_apresentacao">
    
    {/* LETREIO */}
      <div className="container_apresentacao_left">
      <main className="apresentacao-hero">
        <div className="apresentacao-text">
          <span>Eventos</span>
          <span>simplificados.</span>
          <span className="highlight">Experiências</span>
          <span className="highlight">inesquecíveis.</span>
        </div>
        <p className="apresentacao-subtitle">
          A plataforma definitiva para gestores que exigem perfeição.
          <br />
          Controle total, design premium e fluidez absoluta.
        </p>
      </main>
      <button className="button_padrao">Começar Agora</button>
      </div>

      <div className="container_apresentacao_right">
        <img src={image} alt="Apresentacao" />
      </div>
      </div>

      <InfosCard />
      <Piramide />

    </div>
  )
}

export default Apresentacao;