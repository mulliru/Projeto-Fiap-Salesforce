"use client"
import React, { useState } from 'react';
import BotaoFormulario from '../BotaoFormulario/page';
import Form from '../Form/Form';
import '../BotaoFormulario/BotaoEstilo.css';

function ComponentePai() {
    const [formularioVisivel, setFormularioVisivel] = useState(false);

    const handleAbrirFormulario = () => {
        setFormularioVisivel(true);
    }

    const handleCloseFormulario = () => {
        setFormularioVisivel(false);
    }

    return (
        <div>
            <BotaoFormulario onClick={handleAbrirFormulario} />
            {formularioVisivel && <Form isVisible={true} onClose={handleCloseFormulario}/>}
        </div>
    );
}

export default ComponentePai;