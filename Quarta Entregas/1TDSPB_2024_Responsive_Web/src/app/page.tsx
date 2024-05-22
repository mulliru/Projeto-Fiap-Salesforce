import Link from "next/link";
import Image from "next/image";
import "./principal.css";
import pessoasComemorando from "./assets/unsplash_376KN_ISplE.png";
import estrategiaDeNegocio from "./assets/unsplash_mpN7xjKQ_Ns.jpg";
import Empresa from "./assets/unsplash_wD1LRb9OeEo.jpg";
import UrsoCores from "./assets/image 24.png";
import ImagemFormula1 from "./assets/formula-1-logo.webp";
import GeneralMills from "./assets/general-mills-logo.webp";
import Amarante from "./assets/logo-grid-amarante-card-service.webp";
import Engie from "./assets/logo-grid-engie-card-service.webp";
import Inter from "./assets/logo-grid-inter-card-service.webp";
import SulAmerica from "./assets/logo-grid-sulamerica-card-service.webp";
import Vodafone from "./assets/logo-grid-vodafone-card-service.webp";
import Santander from "./assets/santander-logo.webp";
import gif from "./assets/giphy.gif";


export default function Home() {
  return (
    <main className="containerPrincipal">
      <section className="tituloMenu">
            <div className="texto-titulo">
                <h1>EXPLORE O <strong className="titulo-novo">NOVO</strong></h1>
                <p>Cada pixel, cada detalhe, foi meticulosamente reconstruído para oferecer uma experiência envolvente e
                    intuitiva. Navegue por uma jornada revitalizada, onde a estética encontra a
                    funcionalidade</p>

                <button className="botao-titulo">Saiba Mais!</button>
            </div>

            
           <Image className="imgTituloMenu" src={gif} alt="ursoPrincipal" priority />
        </section>

        <section className="titulo-introducao">
            <h2><strong className="nossos-clientes">Nossos Clientes</strong> são parte da
                nova inclusão aqui</h2>

            <p>Nosso compromisso é criar um conteúdo de valor significativo para você. Na Salesforce, dedicamo-nos a
                oferecer não apenas informações relevantes, mas também tutoriais envolventes e educativos.</p>
        </section>

        <section className="introducao-card">
            <div className="card cardMobile cardCorBranca">
                <h2>Newsletter: o que é e como criar?</h2>
                <p>Você recebe algumas dezenas de newsletter por semana, né? E não à toa: a estratégia promete
                    qualificação de leads e mais conversões para o seu negócio....</p>
            </div>

            <div className="cards-imagens">
                <div className="card-esquerda-imagem cardMobile ">
                    <div className="card-meio cardMobile bordaESombra">
                        <h2>Como impulsionar suas vendas no final do ano com Salesforce</h2>
                        <p>
                        O final do ano está chegando e é o momento ideal para alavancar suas vendas aproveitando [...]
                        </p>
                    </div>

                    <Image className="card-imagem-esquerda bordaESombra" src={Empresa} alt="" />
                </div>


                <div className="card-direita-imagem cardMobile ">
                    <Image className="imagem-card-da-direita bordaESombra" src={pessoasComemorando} alt="" />

                    <div className="card-direita cardCorBranca">
                        <h2>Apagão na distribuição de Energia como a Salesforce pode ajudar?</h2>
                        <p>
                            Apagão na distribuição de Energia: como a Salesforce pode ajudar? A organização está usando as soluções da nossa nuvem em seus negócios na Nova Geração (NGR).
                        </p>
                    </div>
                </div>       
            </div>
            
            <Image className="imagem-grande-direita" src={estrategiaDeNegocio} alt="" />
        </section>

        <section className="principais-produtos">
            <h2 className="titulo-principais-produtos">Principais Produtos <span className="nossas-funcionalidades">Nossas
                    funcionalidades mais famosas!</span></h2>

            <div className="produtos-principais">
                <div className="sequencia-principais-produtos">
                    <div className="produtos">
                        <span className="numeros-produtos numero-um">01</span>
                        <div className="texto-produtos">
                            <h2>Social Media Marketing</h2>
                            <p>Construa relações duradouras com as estratégias do marketing digital fundamentado em
                                dados </p>
                        </div>

                    </div>

                    <div className="produtos">
                        <span className="numeros-produtos numero-dois">02</span>
                        <div className="texto-produtos">
                            <h2>Data Cloud da Salesforce</h2>
                            <p>Cruze todos dados dos seus clientes nos diversos apps da Salesforce com o Data Cloud</p>
                        </div>
                    </div>

                    <div className="produtos">
                        <span className="numeros-produtos numero-tres">03</span>
                        <div className="texto-produtos">
                            <h2>Salesforce Commerce Cloud </h2>
                            <p>Amplie o comércio com confiança na platafoarma mais completa.. </p>
                        </div>
                    </div>
                </div>
                <Image className="imagem-urso" src={UrsoCores} alt="Imagem do urso com cores" />
            </div>
        </section>

        <section className="ganhe-mentoria">
            <div className="imagemDivulga" >
                <div className="imagemDivulgaTexto">
                    <h2>Maior produtividade</h2>
                    <p>Trazendo um diferencial da concorrência</p>
                    <Link href="#">VER ESTRATÉGIAS</Link>
                </div>
            </div>
        </section>

        <section className="cards-empresa">
            <h2>Trabalhando com <span className="empresas">empresas </span>do mundo todo</h2>
            <div className="cards-parceiros">
                <div className="cards-empresas">
                    <Image src={Inter} alt="Imagem banco inter" />
                </div>

                <div className="cards-empresas">
                    <Image src={SulAmerica} alt="Imagem SulAmerica" />
                </div>

                <div className="cards-empresas">
                    <Image src={Engie} alt="Imagem  Engie" />
                </div>

                <div className="cards-empresas">
                    <Image src={Vodafone} alt="Imagem  Vodafone" />
                </div>

                <div className="cards-empresas">
                    <Image src={GeneralMills} alt="Imagem  General Mills" />
                </div>

                <div className="cards-empresas">
                    <Image src={Santander} alt="Imagem  Banco Santander" />
                </div>

                <div className="cards-empresas">
                    <Image src={Amarante} alt="Imagem Amarante" />
                </div>

                <div className="cards-empresas">
                    <Image src={ImagemFormula1} alt="Imagem  Formula 1" />
                </div>
            </div>
        </section>
    </main>
  );
}
