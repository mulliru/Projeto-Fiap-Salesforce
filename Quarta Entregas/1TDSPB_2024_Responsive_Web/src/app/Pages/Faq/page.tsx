import Image from "next/image";
import "../Faq/faq.css";
import ImagemFaq from "../../assets/imagem-faq.png"
import ImagemDoPc from "../../assets/unsplash_FVwG5OzPuzo.png"
import ImagemDuasPessoas from "../../assets/duasPessoas.png"
import { FaPlus } from "react-icons/fa";


const Faq = () => {

    return (
        <main>
            <section className="introducao-faq">
                <div className="texto-card-faq">
                    <div className="texto-faq">
                        <h1 className="encontre-resposta">Encontre as respostas que você mais precisa para tudo da Salesforce
                        </h1>
                        <p className="paragrafo-introducao-faq">Obtenha assistência especializada quando você mais precisa.
                            Estamos à disposição para resolver seus problemas de maneira eficiente e personalizada. Conte
                            conosco para superar desafios e garantir que sua experiência seja sempre excepcional.</p>
                        <p className="paragrafo-introducao-faq">Estamos dedicados a fornecer suporte de alta qualidade. Com
                            respostas rápidas e soluções eficazes, garantimos que você receba a ajuda necessária.</p>
                        <a className="conhecer-produtos" href="">Conhecer os produtos Salesforce <samp><i
                            className="fa-solid fa-arrow-right"></i></samp></a>
                    </div>

                    <div className="card-faq">
                        <h2 className="duvidas">Dúvidas?</h2>
                        <p className="conhecimento-desvende">Em busca de conhecimento?
                            Desvende suas dúvidas conosco.</p>
                        <a className="link-saiba-mais" href="">Saiba Mais <span><i
                            className="fa-solid fa-arrow-right"></i></span></a>
                        <Image src={ImagemFaq} alt="" />
                    </div>
                </div>
            </section>

            <section className="duvidas-de-produtos">
            <h2 className="duvidas-frenquentes">FAQ: Dúvidas frequentes</h2>
            <div className="conteiner-faq">
                <div className="divulgacao-dos-produtos-esquerda">
                    <div className="icone-texto-faq">
                        <FaPlus className="fa-solid fa-crosshairs" />
                        <i className="fa-solid fa-crosshairs"></i>
                        <div className="texto-divulgacao-faq">
                            <h2>O que é CRM?</h2>
                            <p>CRM é a sigla usada para Customer Relationship Management e se refere ao conjunto de
                                práticas, estratégias de negócio e tecnologias focadas no relacionamento com o cliente
                            </p>
                        </div>
                    </div>

                    <div className="icone-texto-faq">
                        <FaPlus className="fa-solid fa-crosshairs" />
                        <div className="texto-divulgacao-faq">
                            <h2>CRM e blockchain</h2>
                            <p>Para CRM, blockchain significa mais segurança através de um sistema anti-fraudes, clareza
                                e transparência nas informações e aumento da confiança nas negociações e transações
                            </p>
                        </div>
                    </div>

                    <div className="icone-texto-faq">
                        <FaPlus className="fa-solid fa-crosshairs"/>
                        <div className="texto-divulgacao-faq">
                            <h2>Qual a Diferença entre CRM e ERP?</h2>
                            <p>ERP corresponde a Enterprise Resource Planning e se baseia em soluções informatizadas de
                                gestão de processos organizacionais, especialmente processos financeiros como contas a
                                pagar, emissão de notas fiscais e planejamento
                            </p>
                        </div>
                    </div>
                </div>

                <div className="divulgacao-dos-produtos-esquerda">
                    <div className="icone-texto-faq">
                        <FaPlus className="fa-solid fa-crosshairs" />
                        <div className="texto-divulgacao-faq">
                            <h2>O que é computação na nuvem?</h2>
                            <p>De uma forma simples, cloud computing, ou computação na nuvem, é uma tecnologia que
                                permite acesso remoto a softwares, armazenamento de arquivos e processamento de dados
                                por meio da internet
                            </p>
                        </div>
                    </div>

                    <div className="icone-texto-faq">
                        <FaPlus className="fa-solid fa-crosshairs"/>
                        <div className="texto-divulgacao-faq">
                            <h2>Como a Salesforce pode ajudar?</h2>
                            <p>A partir do primeiro contato com um cliente potencial até o relacionamento com uma conta
                                antiga, o CRM ajuda as empresas a ter sucesso em cada aspecto do atendimento ao cliente
                            </p>
                        </div>
                    </div>

                    <div className="icone-texto-faq">
                        <FaPlus className="fa-solid fa-crosshairs" />
                        <div className="texto-divulgacao-faq">
                            <h2>Qual o uso da Inteligência Artificial?</h2>
                            <p>o uso de inteligência artificial para CRM irá impulsionar negócios globais em 1.1
                                trilhões de dólares até 2021 com o uso de machine learning, deep learning e
                                processamento natural de linguagem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="conteudo-negocio">
            <div className="imagem-texto-negocio">
                <Image className="imagem-mulher-com-copo" src={ImagemDoPc} alt="" />
                <div className="texto-negocio">
                    <h2 className="negocios">Negócios</h2>
                    <h3 className="desvendando">Desvendando <span className="o-significado">o Significado da</span> Salesforce
                    </h3>
                    <p className="comecamos-a-operar">Desde que começamos a operar em um pequeno apartamento em São
                        Francisco em 1999, acreditamos que fazer o bem como empresa significa fazer o bem ao mundo. Por
                        isso, comprometemos nosso tempo, equidade e produtos para melhorar a educação, a igualdade e o
                        meio ambiente para todos. Os principais valores da Salesforce:</p>
                    <p className="confiança-sucesso">Confiança, Sucesso do Cliente, Inovação, Igualdade.</p>
                </div>
            </div>
        </section>

        <section className="textimageclass">
            <div className="cards-texto-salesforce">
                <h2 className="o-que-e-salesforce">O que é salesforce</h2>
                <p className="empresa-softwares">Salesforce é uma empresa de softwares que foca na solução de <span
                        className="gerenciamento-relacionamento">gerenciamento de relacionamento</span> para aproximar
                    empresas e pessoas.</p>

                <div className="cards-duvidas">
                    <div className="info-card">
                        <p className="paragrafo-info-card">Atraia mais compradores com uma estratégia de marketing
                            personalizada.</p>
                    </div>

                    <div className="info-card">
                        <p className="paragrafo-info-card">Conquiste mais clientes conhecendo suas necessidades e
                            preocupações.</p>
                    </div>

                    <div className="info-card">
                        <p className="paragrafo-info-card">Automatize tarefas demoradas criando aplicativos personalizados.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="ArtigoVisual">
            <div className="ConteudoMultimidia">
                <div className="TextoImagem">
                    <h2 className="negocioQue">Negócios</h2>
                    <h3 className="o-que-a-salesforce-faz">O que a
                        Salesforce Faz?</h3>
                    <p className="nossa-plataforma">Nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus
                        clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing,
                        vendas, commerce, atendimento ao cliente, TI e muito mais.</p>
                        <a className="conheca-equipe" href="">Conheça a Nossa Equipe <span><i
                            className="fa-solid fa-arrow-right"></i></span></a>
                </div>
                <Image className="imagem-dois-homens" src={ImagemDuasPessoas} alt="" />
            </div>
        </section>

        </main>
    )

}

export default Faq;