package br.com.salesforce.form;

import java.sql.SQLException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Random;
import java.util.Scanner;

import br.com.fiap.dao.UsuarioDAO;
import br.com.salesforce.beans.Usuario;

public class CadastroUsuarioForm {

	public Usuario exibirFormulario() {

		Scanner scanner = new Scanner(System.in);

		System.out.println("\n====================");
		System.out.println("-------CADASTRO-----");
		System.out.println("====================\n");

		
		System.out.print("Infome o nome: ");
		String nome = scanner.nextLine();
		
		System.out.print("Infome o apelido: ");
		String apelido = scanner.nextLine();

		System.out.print("Informe o sobrenome: ");
		String sobrenome = scanner.nextLine();

		System.out.print("Infome o CPF: ");
		String cpf = scanner.nextLine();

		System.out.print("Digite a data de nascimento (no formato dd/MM/yyyy): ");
		String nascimentostr = scanner.nextLine();
		LocalDate nascimento = LocalDate.parse(nascimentostr, DateTimeFormatter.ofPattern("dd/MM/yyyy"));

		

		System.out.print("Informe o EMAIL: ");
		String email = scanner.nextLine();

		System.out.print("Informe a SENHA: ");
		String senha = scanner.nextLine();

		Usuario usuario = new Usuario();
		

		// Cadastro
		// gera numero aleatorio no id
		Random geradorInteiro = new Random();
		int idUsuarioAleatorio = geradorInteiro.nextInt(99999999);
		
		usuario.setId(idUsuarioAleatorio);
		usuario.setNome(nome);
		usuario.setApelido(apelido);
		usuario.setSobrenome(sobrenome);
		usuario.setNascimento(nascimento);
		usuario.setEmail(email);
		usuario.setSenha(senha);
		
		try {
			UsuarioDAO usuarioDAO = new UsuarioDAO();
			usuarioDAO.inserir(usuario);
			
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
			System.out.println("ERRO NO CADASTRO USUARIO");
		}
		
		
		
		
		System.out.println("\n" + usuario.toString() + "\n" + usuario.podeCadastar());

		return usuario;
			

	}

}
