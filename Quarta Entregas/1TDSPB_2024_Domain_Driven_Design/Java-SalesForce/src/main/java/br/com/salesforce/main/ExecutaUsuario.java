package br.com.salesforce.main;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.Random;

import br.com.fiap.dao.ContatoUsuarioDAO;
import br.com.fiap.dao.UsuarioDAO;
import br.com.salesforce.beans.Usuario;

public class ExecutaUsuario {
	public static void main(String[] args) {
		Usuario usuario = new Usuario();
		
		try {
			UsuarioDAO usuarioDAO = new UsuarioDAO();
			
			Random random = new Random();
			usuario.setId(random.nextInt(99999999));
			usuario.setApelido("xuxa");
			usuario.setNome("keven");
			usuario.setNascimento(LocalDate.of(2024, 8, 12));
			usuario.setSobrenome("Silva");
			usuario.setEmail("keven@silva");
			usuario.setSenha("1234");
			
			
			System.out.println(usuarioDAO.inserir(usuario));
			
			
			
		} catch (ClassNotFoundException | SQLException exception) {
			exception.printStackTrace();
			System.out.println("ERRO NA INTEGRAÇÃO COM BANCO DE DADOS");
		}
		

		
	}
}
