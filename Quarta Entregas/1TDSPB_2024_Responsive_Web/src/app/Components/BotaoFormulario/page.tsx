import "../BotaoFormulario/BotaoEstilo.css";

interface BotaoFormularioProps {
  onClick: () => void; 
}

function BotaoFormulario({ onClick }: BotaoFormularioProps) {
    return (
        <section className="botaoFormulario" onClick={onClick}>
            <h2>Contato</h2>
        </section>
    );
}

export default BotaoFormulario;