package br.com.salesforce.main;

import java.sql.SQLException;
import java.util.UUID;

import javax.swing.JOptionPane;

import br.com.fiap.dao.ContatoUsuarioDAO;
import br.com.salesforce.beans.ContatoUsuario;

public class ExexutarCadastroContatoUsuario {

	static String texto(String j) {
		return JOptionPane.showInputDialog(j);
	}
	
	static int inteiro(String j) {
		return Integer.parseInt(JOptionPane.showInputDialog(j));
	}
	
	public static void main(String[] args)  {
		
		ContatoUsuario contatoUsuario = new ContatoUsuario();
		
		try {
			ContatoUsuarioDAO contatoUsuarioDAO = new ContatoUsuarioDAO();
			
			contatoUsuario.setIdContato(UUID.randomUUID().toString());
			contatoUsuario.setNome("Joao");
			contatoUsuario.setTelefoneContato("11932755268");
			contatoUsuario.setEmailContato("keven@gmai.com");
			
			System.out.println(contatoUsuarioDAO.inseir(contatoUsuario));
			
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
			System.out.println("ERRO COM A CONEXÃO COM BANCO DE DADOS");
		}
		

		

	}

}
