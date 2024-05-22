package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;

import br.com.fiap.conexao.ConnectFactory;
import br.com.salesforce.beans.Usuario;

public class UsuarioDAO {

	public Connection minhaConexao;

	public UsuarioDAO() throws ClassNotFoundException, SQLException {
		super();
		this.minhaConexao = new ConnectFactory().conexao();
	}

	public String inserir(Usuario cadastroUsuario) throws SQLException {
		PreparedStatement statement = minhaConexao.prepareStatement("insert into usuario(id_usuario, apelido, nome, sobrenome, nascimento, email, senha) "
				+ "values (?, ?, ?, ?, ?, ?, ?)");
		
		statement.setInt(1, cadastroUsuario.getId());
		statement.setString(2, cadastroUsuario.getApelido());
		statement.setString(3, cadastroUsuario.getNome());
		statement.setString(4, cadastroUsuario.getSobrenome());
		statement.setObject(5, cadastroUsuario.getNascimento());
		statement.setString(6, cadastroUsuario.getEmail());
		statement.setString(7, cadastroUsuario.getSenha());
		statement.execute();
		statement.close();

		return "Cadastrado com Sucesso";
	}
}
