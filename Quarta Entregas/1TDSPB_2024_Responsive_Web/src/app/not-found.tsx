import "./notfound.css"
import Link from "next/link";

const notfound = () => {
    return (
        <section className="not">
            <div className="container-erro">
                <h1 className="erro404">404</h1>
                <br />
                <h2 className="erro-404">Erro 404: Página Não Encontrada</h2>
                <br />
                <div>
                    <p>Oops! Parece que você se perdeu. A página que você está procurando não está aqui.</p>
                    <br />
                    <p>Por favor, verifique o URL e tente novamente. Se o problema persistir, entre em contato conosco para que possamos ajudar a encontrar o que você procura.</p>
                    <br />
                    <p>Enquanto isso, você pode voltar à página inicial para explorar outros conteúdos interessantes.</p>
                    <br />
                    <br />
                    <br />
                    <Link className="pagina-inicial-erro" href="/">Pagina inicial</Link>
                </div>
            </div>
            <div className="box-of-star1">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div className="box-of-star2">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div className="box-of-star3">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div className="box-of-star4">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div data-js="astro" className="astronaut">
                <div className="head"></div>
                <div className="arm arm-left"></div>
                <div className="arm arm-right"></div>
                <div className="body">
                    <div className="panel"></div>
                </div>
                <div className="leg leg-left"></div>
                <div className="leg leg-right"></div>
                <div className="schoolbag"></div>
            </div>

        </section>
    )

}
export default notfound;