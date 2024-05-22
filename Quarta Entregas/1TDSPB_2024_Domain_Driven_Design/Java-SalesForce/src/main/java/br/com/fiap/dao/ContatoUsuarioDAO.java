package br.com.fiap.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.conexao.ConnectFactory;
import br.com.salesforce.beans.ContatoUsuario;

public class ContatoUsuarioDAO {
	
	public Connection minhaConexao;
	
	
	
	public ContatoUsuarioDAO() throws ClassNotFoundException, SQLException {
		super();
		this.minhaConexao = new ConnectFactory().conexao();
	}



	public String inseir(ContatoUsuario contatoUsuario) throws SQLException {
		PreparedStatement statement = minhaConexao.prepareStatement(" insert into contato(id_contato, nome, telefone, email, cep, lougradoro, localidade) "
				+ "values(?, ?, ?, ?, ?, ?, ?)");
		
		statement.setString(1, contatoUsuario.getIdContato());
		statement.setString(2, contatoUsuario.getNome());
		statement.setString(3, contatoUsuario.getTelefoneContato());
		statement.setString(4, contatoUsuario.getEmailContato());
		statement.setString(5, contatoUsuario.getCep());
		statement.setString(6, contatoUsuario.getLougradoro());
		statement.setString(7, contatoUsuario.getLocalidade());
		statement.execute();
		statement.close();
		
		return "Contato Cadastrado com Sucesso";
	}

}
