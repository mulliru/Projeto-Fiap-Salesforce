import "./Produtos.css"
import Image from "next/image";
import { FaCrosshairs } from "react-icons/fa";
import ContaComercial from "../../assets/conta-comercial.png"
import ContaPessoal from "../../assets/conta-pessoal.png"
import ImagemAranha from "../../assets/imagem-aranha.png"
import MulherSorrindo from "../../assets/Primeiro retangulo.png"

const Produtos = () => {
    return (
        <>
            <section className="introducao-produtos">
                <div className="produtos">
                    <div className="produtos-esquerda">
                        <h1>Vamos encontrar o que mais se encaixa em seu negócio!</h1>
                        <p>Desperte o potencial total dos seus negócios com o Salesforce Customer 360. Seja no marketing,
                            vendas, e-commerce, atendimento ao cliente ou gestão de dados, estamos reinventando a maneira
                            como sua equipe opera
                        </p>
                        <p> Imagine a colaboração perfeita, impulsionada por dados conectados, inteligência artificial
                            confiável e o CRM número 1 em IA. Agora, essa visão é realidade. O futuro da produtividade
                            empresarial começa aqui</p>
                    </div>

                    <div className="produtos-direita">
                        <div className="icones-do-texto">
                            <FaCrosshairs className="icon" />
                            <div className="texto-principal">
                                <h2>Colaboração Pioneira</h2>
                                <p>Revolucione a colaboração com a Salesforce. Da mesma forma que o Lorem ipsum é padrão,
                                    nossas soluções oferecem colaboração inteligente entre equipes, com IA e CRM líder
                                    impulsionando inovação e eficácia.
                                </p>
                            </div>
                        </div>

                        <div className="icones-do-texto">
                            <FaCrosshairs className="icon-meio" />
                            <div className="texto-principal">
                                <h2>Conexão Transformadora</h2>
                                <p>Redefina conexões com o Salesforce Customer 360. Como o Lorem ipsum é ponto de partida,
                                    nossa plataforma proporciona uma experiência nova, com cada interação aprimorada por
                                    dados interligados. Explore possibilidades para impulsionar o sucesso do cliente. O
                                    futuro da conexão está ao seu alcance
                                </p>
                            </div>
                        </div>

                        <div className="icones-do-texto">
                            <FaCrosshairs className="icon"/>
                            <div className="texto-principal">
                                <h2>Eficiência Excepcional</h2>
                                <p>Eleve a eficiência com o Salesforce Customer 360. Assim como o Lorem ipsum é referência,
                                    nossa
                                    plataforma otimiza dados e inteligência artificial, liderando em produtividade e
                                    horizontes
                                    operacionais.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            

            <section className="titulo-nova-experiencia">
                <h2 className="nova-experiencia">Comece com uma conta e
                    viva uma nova experiência</h2>

                <div className="card-conta">
                    <div className="card-conta-pessoal">
                        <h2 className="texto-conta">Conta Pessoal</h2>
                        <p className="conta-paragrafo">Contas pessoais armazenam informações sobre pessoas físicas</p>
                        <a className="conta-link" href="#">Saiba mais</a>
                        <Image src={ContaPessoal} alt="" />
                    </div>

                    <div className="card-conta-pessoal">
                        <h2 className="texto-conta">Conta Comercial</h2>
                        <p className="conta-paragrafo">Contas comerciais centralizam dados essenciais sobre entidades
                            empresariais</p>
                        <a className="conta-link" href="#">Saiba mais</a>
                        <Image src={ContaComercial} alt="" />
                    </div>

                </div>
            </section>

            <section className="campo-texto-produtos">
                <div className="campo-texto">
                    <div className="campo-texto-esquedo">
                        <h2 className="entregue-experiencia">
                            Entregue experiências digitais centradas no cliente, com sites conectados, portais comerciais,
                            aplicações e sem criadores de código
                        </h2>

                        <p className="paragrafo-produtos"> Os produtos Salesforce não são apenas promessas; são soluções com
                            base em dados reais e
                            resultados tangíveis. Com uma análise abrangente, constatamos que nossos clientes alcançam um
                            aumento médio de 30% na eficiência operacional ao adotar o Salesforce Sales Cloud. Além disso, a
                            implementação do Salesforce Marketing Cloud resultou em um aumento impressionante de 40% nas
                            taxas de conversão para várias empresas. Nossos produtos são projetados com uma abordagem
                            centrada em dados, fornecendo não apenas uma solução, mas uma vantagem competitiva comprovada.
                        </p>
                    </div>

                    <div className="campo-texto-direito">
                        <p className="paragrafo-exelencia-empresarial"><span className="produtos-salesforce">Os produtos
                            Salesforce</span>definem a excelência empresarial. De automação de marketing a atendimento
                            ao cliente, nossa variedade completa oferece uma jornada para empresas inovadoras. Com o
                            Salesforce Sales Cloud e Service Cloud, tenha uma visão 360 graus dos clientes. A Salesforce
                            Marketing Cloud impulsiona estratégias personalizadas, enquanto o Salesforce Einstein integra
                            inteligência artificial.</p>
                    </div>
                </div>
            </section>

            <section className="ConteudoMultimidia">
                <div className="anucio">
                    <div className="conteudo-marketing">
                        <h2 className="marketing">Marketing</h2>
                        <h3 className="investimento">Investimento em
                            Marketing Eficaz
                        </h3>

                        <p className="cliente-com-sucesso">Atraia clientes com sucesso, gerando um engajamento robusto que vai
                            além das expectativas.
                            Construa relações duradouras e significativas através do poder do marketing digital baseado em
                            dados.</p>

                        <div className="QuantumMark">
                            <div className="icone-marketing">
                                <i className="fa-solid fa-crosshairs fa-marketing"></i>
                                <div className="texto-marketing">
                                    <p>Explore conceitos inovadores para aprimorar sua estratégia de marketing</p>
                                </div>
                            </div>

                            <div className="icone-marketing">
                                <i className="fa-solid fa-crosshairs fa-marketing"></i>
                                <div className="texto-marketing">
                                    <p>Desenvolva uma conectividade eficaz com seu público-alvo.</p>
                                </div>
                            </div>

                            <div className="icone-marketing">
                                <i className="fa-solid fa-crosshairs fa-marketing"></i>
                                <div className="texto-marketing">
                                    <p>Abra caminho a inovação constante em suas iniciativas</p>
                                </div>
                            </div>

                        </div>
                        <button className="btn-demo">Assine À Demo</button>
                    </div>

                    <div className="card-preso-no-tempo">
                        <h2 className="preso-no-tempo">Preso no Tempo?</h2>
                        <p className="ataualize-abordagem">Atualize sua abordagem e impulsione seu potencial com as soluções que
                            oferecemos</p>
                        <a className="saiba-mais" href="">Saiba Mais</a>

                        <Image className="imagem-aranha" src={ImagemAranha} alt="" />
                    </div>
                </div>
            </section>

            <section className="secao-vendas">
                <Image className="imagem-mulher-sorindo" src={MulherSorrindo} alt="" />
                    <div className="vendas">
                        <h2 className="titulo-vendas">Vendas</h2>
                        <h3 className="aumente-as-vendas">Reduza as despesas. Aumente as vendas.</h3>
                        <p className="comercio-online">A revolução no comércio online se torna uma realidade. Proporcione
                            experiências de compra excepcionais, otimize operações e impulsione a lealdade do cliente. De
                            personalização avançada a jornadas de compra fluidas, o Commerce Cloud oferece ferramentas poderosas
                            para elevar sua presença digital</p>
                        <a className="commerce-cloud" href="#">Conhecer os Commerce Cloud <samp><i
                            className="fa-solid fa-arrow-right seta"></i></samp></a>
                    </div>
            </section>
        </>
    )
}
export default Produtos;