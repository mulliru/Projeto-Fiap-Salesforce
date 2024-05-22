package br.com.salesforce.form;

import java.util.Scanner;

import br.com.salesforce.beans.LoginUsuario;

public class LoginUsuarioForm{
	public LoginUsuario exibirFormulario() {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("\n=====================");
		System.out.println("---ENTRADA-LOGIN--");
		System.out.println("=====================\n");
		
		System.out.print("Digite o Email: ");
		String loginEmail = scanner.nextLine();

		System.out.print("Digite a Senha: ");
		String loginSenha = scanner.nextLine();

		LoginUsuario login = new LoginUsuario();
		
		login.setLoginEmail(loginEmail);
		login.setLoginSenha(loginSenha);
		
		System.out.println(login.toString());
		
		return login;
	}
}
