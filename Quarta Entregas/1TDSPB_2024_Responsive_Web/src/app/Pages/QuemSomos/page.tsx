import "./QuemSomos.css"
import Image from "next/image";
import UrsoNoPc from "../../assets/ursonopc (1).gif"
import TrablheCosco from "../../assets/imagemtrabalheconosco.jpg"
import SocialOMundoVaiMudar from "../../assets/imagemsocialomundovaimudar.png"
import ImagemDusMaos from "../../assets/image 33.png"

const QuemSomos = () => {
    return (
        <main className="quemsomos">
            <section className="container-quemsomos">
                <div className="texto-introducao">
                    <h1 className="titulo-quemsomos">Quem <span className="somos">Somos</span></h1>
                    <p className="paragrafo-introducao-quemsomos">
                        A Salesforce é uma empresa americana de softwares que cria soluções para marketing, vendas, atendimento ao cliente, TI e outras áreas. Foi fundada em 1999 e, desde então, já impactou mais de 150 mil pequenas, médias e grandes empresas dos mais variados ramos.
                    </p>
                </div>

                <div className="container-cards-quemsomos">
                    <div className="card-quemsomos">
                        <p>Quem são os profissionais que a Salesforce busca? </p>
                    </div>

                    <div className="card-quemsomos">
                        <p>Trabalhe Conosco</p>
                    </div>

                    <div className="card-quemsomos">
                        <p>Entrando para o futuro com as mudanças do hoje</p>
                    </div>

                    <div className="card-quemsomos">
                        <p>Reunir Pessoas e fazer a diferença</p>
                    </div>
                </div>
            </section>

            <section className="profissional">
                <div className="container-profissional">
                    <div className="profissional-capacitados">
                        <h2 className="titulo-profissionais">
                            Profissionais  <span className="capacitados">Capacitados</span> para Seu Negócio
                        </h2>
                        <p>Esteja você programando nossa próxima inovação em IA ou impulsionando o sucesso de nossos clientes, você encontrará aqui sua opção em uma de nossas equipes de alto desempenho. na Salesforce você encontrará a oportunidade perfeita em uma de nossas equipes de alto desempenho. </p>
                        <p>Nosso ambiente de trabalho é um terreno fértil para mentes criativas e visionárias, onde cada contribuição, por menor que seja, faz uma diferença significativa.</p>
                    </div>

                    <div className="conteudo-profissional">
                        <Image className="gif-do-urso-no-pc" src={UrsoNoPc} alt="gif do urso no pc"/>
                    </div>
                </div>

            </section>

            <section className=" beneficios-trabalhe-conosco">
                <div className="container-beneficios-trabalhe">
                    <div className="titulo-trabalhe-conosco">
                        <h2 className="trabalhe-conosco">Trabalhe Conosco</h2>
                        <h3 className="de-seu-melhor">Dê o seu melhor em todas as partes da sua vida.</h3>
                        <p className="paragrafo-trabalhe-conosco">
                            Junte-se à nossa jornada extraordinária. Na Salesforce, não estamos apenas construindo software; estamos moldando o futuro. Procuramos    mentes criativas e corações apaixonados que desejam fazer parte de uma equipe que redefine o possível.
                        </p>
                    </div>
                    <Image className="imagem-trabalhe-conosco" src={TrablheCosco} alt="Imagem trabalhe conosco" />
                </div>
            </section>

            <section className="social-mundo-vai-mudar">
                <div className="container-social-mundo-vai-mudar">
                    <Image src={SocialOMundoVaiMudar} alt="Imagem o mundo vai mudar" />
                    <div className="texto-social-mundo-vai-mudar">
                        <h2 className="titulo-social-mundo-vai-mudar">Social</h2>
                        <h3 className="o-mundo-vai-mudar">O mundo vai mudar, mas o foco no cliente permanece.</h3>
                        <p className="paragrafo-social-mundo-vai-mudar">
                            Tão certo quanto o nascer do sol, haverá novas tecnologias, novas tendências sociais, novas coisas que importam agora. Mas o cliente ainda será o cliente. Perspicaz. Exigente. Ansioso para ser surpreendido. Nosso objetivo é ajudá-lo a encontrá-los onde quer que estejam, para que permaneçam sempre leais à sua empresa, aconteça o que acontecer.
                        </p>
                    </div>
                </div>
            </section>

            <section className="social-redefinir">
                <div className="container-social-redefinir">
                    <div className="texto-redefinir">
                        <h2 className="titulo-social-redefinir">Social</h2>
                        <h3 className="reunir-passoas">Reunir pessoas muda tudo.</h3>
                        <p className="paragrafo-desde-o-inicio">
                            Desde o início, a Salesforce procurou mudar o mundo para melhor através da tecnologia que cria relacionamentos mais fortes. Entre empresas e seus clientes. Entre funcionários e equipes distantes. Entre governos e seus cidadãos. Entre as pessoas que querem fazer a diferença.
                        </p>
                    </div>
                    <div className="imagem-social-redefinir">
                        <Image className="imagem-das-maos" src={ImagemDusMaos} alt="imagem duas maos" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default QuemSomos;