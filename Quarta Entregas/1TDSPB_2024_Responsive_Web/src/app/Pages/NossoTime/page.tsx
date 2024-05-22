import Image from "next/image";
import  Link from "next/link";
import "../NossoTime/NossoTime.css"
import UrsoPalmas from "../../assets/ursopalmas.gif"
import ImagemEquipe from "../../assets/imagem-equipe.png"
import ImagemKeven from "../../assets/keven.png"
import ImagemMurilo from "../../assets/murilo.png"
import ImagemNossoTime from "../../assets/nossotime.png"
import ImagemPedro from "../../assets/pedro.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NossoTime = () => {
    return (
        <main>
              <section className="introducao-nosso-time">
            <div className="imagem-e-texto-nosso-time">
                <div className="texto-nosso-time">
                    <h1 className="nosso-time">Nosso Time</h1>
                    <p className="movidos-por-paixao">Movidos por paixão e habilidades diversificadas, cada membro é uma
                        peça fundamental no
                        quebra-cabeça do nosso sucesso</p>
                </div>
                <Image src={UrsoPalmas} alt="gif do urso" />
            </div>
        </section>

        <section className="intruducao-equipe">
            <div className="card-texto-equipe">
                <div className="texto-equipe">
                    <h2 className="equipe">Equipe</h2>
                    <h3 className="contruindo-juntos">Construindo Juntos uma equipe diversificada</h3>
                    <p>Em um cenário global e dinâmico, a diversidade não é apenas uma vantagem, mas uma necessidade. Ao
                        reunir indivíduos com experiências, perspectivas e habilidades diversas, criamos um caldeirão de
                        criatividade e inovação.</p>

                    <p>A diversidade não apenas enriquece nossa equipe de desenvolvimento, mas também amplia nossa visão
                        de mundo, permitindo-nos alcançar soluções mais abrangentes e eficazes</p>
                </div>

                <div className="card-equipe">
                    <h2 className="uma-equipe">Uma equipe</h2>
                    <p className="diferetes-perspectivas">Diferentes perspectivas e visões
                        para solucionar problemas</p> 
                    <Image className="imagem-equiepe-maos" src={ImagemEquipe} alt="" />
                </div>
            </div>
        </section>

        <section className="time-de-desenvolvimento">
            <div className="o-grande-time">
                <h2 className="nosso-time-de-desenvolvimento">Nosso Time</h2>
                <h3 className="time-de-especialistas">Time de Especialistas</h3>

                <div className="dados-do-time">
                    <div className="nome-e-imagem">
                        <Image className="imagem-do-grupo" src={ImagemKeven} alt="" />
                        <h2 className="nome-do-grupo">Keven Silva - Desenvolvedor</h2>
                        <h3 className="numero-do-rm">RM: 553215</h3>
                        <Link className="rede-sociais-grupo" href="https://www.linkedin.com/in/keven-ike-p-silva/"><FaLinkedin className="fa-brands fa-linkedin" />Linkedin</Link>
                        <Link className="rede-sociais-grupo" href="https://github.com/kevenike"><FaGithub className="fa-brands fa-github" />Github</Link>
                    </div>
                    
                    <div className="nome-e-imagem">
                        <Image className="imagem-do-grupo" src={ImagemMurilo} alt="" />
                        <h2 className="nome-do-grupo">Murillo Ferreira - Prototipação</h2>
                        <h3 className="numero-do-rm">RM: 553315</h3>
                         <Link className="rede-sociais-grupo" href="#"><FaLinkedin className="fa-brands fa-linkedin" />Linkedin</Link>
                        <Link className="rede-sociais-grupo" href="#"><FaGithub className="fa-brands fa-github" />Github</Link>
                    </div>

                    <div className="nome-e-imagem">
                        <Image className="imagem-do-grupo" src={ImagemPedro} alt="" />
                        <h2 className="nome-do-grupo">Pedro Luiz Prado</h2>
                        <h3 className="numero-do-rm">RM: 553874</h3>
                        <Link className="rede-sociais-grupo" href="#"><FaLinkedin className="fa-brands fa-linkedin" />Linkedin</Link>
                        <Link className="rede-sociais-grupo" href="#"><FaGithub className="fa-brands fa-github" />Github</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="nossa-organizacao">
            <div className="imagem-e-texto-organizacao">
                <div className="texto-organizacao">
                    <h2 className="organizacao">Organização</h2>
                    <h3 className="como-nos-organizamos">Como nós <span className="organizamos">organizamos</span> o time</h3>
                    <p className="paragrafo-organizacao">Nós organizamos nossa equipe com a convicção de que cada membro tem um papel fundamental no desenvolvimento do projeto. Valorizamos a participação efetiva de todos, criando um ambiente onde ideias prosperam e cada voz é ouvida.</p>
                </div>
                <Image className="imagem-nosso-time" src={ImagemNossoTime} alt="" />
            </div>
        </section>

        </main>
    )
}
export default  NossoTime;