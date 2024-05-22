"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import "./Formulario.css"
import { FaXmark } from "react-icons/fa6";

interface FormProps {
    isVisible: boolean;
    onClose?: () => void;
}

interface FormData {
    [key: string]: string;
}

const Form: React.FC<FormProps> = ({ isVisible, onClose }) => {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telefone: '',
        cep: '',
        lougradoro: '',
        cidade: ''
    });

    const handleFormEdit = (event: ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        });
    };

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8081/Formulario', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
                const json = await response.json();
                console.log(json);
            } else {
                console.error('Erro ao enviar dados:', response.statusText);
                const errorText = await response.text(); 
                console.log('Resposta do servidor:', errorText);
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <>
            <section className={`formularioFixado ${isVisible ? '' : 'formOculto'}`} >
                <FaXmark className="iconex" onClick={handleClose} />
                <form onSubmit={handleForm} className="fixado" action="">
                    <h2 className="legenda">Ganhe uma mentoria <span className="especializada">especializada</span></h2>
                    <div className="formulario-lead">
                        <input className="input"
                            type="text"
                            id="nome" 
                            required
                            value={formData.name}
                            onChange={(e) => handleFormEdit(e, 'name')}
                        />
                        <label htmlFor="nome">Nome Completo</label>
                    </div>

                    <div className="formulario-lead">
                        <input className="input"
                            type="email"
                            id="email" 
                            required
                            value={formData.email}
                            onChange={(e) => handleFormEdit(e, 'email')}
                        />
                        <label htmlFor="email">Seu E-mail</label>
                    </div>

                    <div className="formulario-lead">
                        <input className="input"
                            type="tel"
                            id="telefone" 
                            required
                            value={formData.telefone}
                            onChange={(e) => handleFormEdit(e, 'telefone')}
                        />
                        <label htmlFor="telefone">Seu Telefone</label>
                    </div>

                    <div className="formulario-lead">
                        <input className="input"
                            type="text"
                            id="cep"
                            required
                            value={formData.cep}
                            onChange={(e) => handleFormEdit(e, 'cep')}
                        />
                        <label htmlFor="cep">Seu Cep</label>
                    </div>

                    <div className="formulario-lead">
                        <input className="input"
                            type="text"
                            id="lougradoro"
                            required
                            value={formData.lougradoro}
                            onChange={(e) => handleFormEdit(e, 'lougradoro')}
                        />
                        <label htmlFor="lougradoro">Lougradoro</label>
                    </div>

                    <div className="formulario-lead">
                        <input className="input"
                            type="tel"
                            id="cidade"
                            required
                            value={formData.cidade}
                            onChange={(e) => handleFormEdit(e, 'cidade')}
                        />
                        <label htmlFor="cidade">Cidade</label>
                    </div>

                    <button className="botaoFormularioFixado">Enviar</button>
                </form>
            </section>
        </>
    );
};

export default Form;
