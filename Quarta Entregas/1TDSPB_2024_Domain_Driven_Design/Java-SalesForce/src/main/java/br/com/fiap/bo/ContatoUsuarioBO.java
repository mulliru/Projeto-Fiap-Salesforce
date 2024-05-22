package br.com.fiap.bo;

import java.sql.SQLException;


import br.com.fiap.dao.ContatoUsuarioDAO;
import br.com.salesforce.beans.ContatoUsuario;

public class ContatoUsuarioBO {
    
    private ContatoUsuarioDAO contatoUsuarioDAO;
    
   
    // Método para inserir um novo contato de usuário
    public void inserirBo(ContatoUsuario contatoUsuario) throws ClassNotFoundException, SQLException {
        contatoUsuarioDAO = new ContatoUsuarioDAO();
        contatoUsuarioDAO.inseir(contatoUsuario);
    } 
   
}
