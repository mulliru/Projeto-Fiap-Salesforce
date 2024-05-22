package br.com.salesforce.beans;

public class LoginUsuario {
	
	private String loginEmail;
	private String loginSenha;

	public LoginUsuario() {
		super();
	}

	public LoginUsuario(String loginEmail, String loginSenha) {
		super();
		this.loginEmail = loginEmail;
		this.loginSenha = loginSenha;
	}

	public String getLoginEmail() {
		return loginEmail;
	}

	public void setLoginEmail(String loginEmail) {
		this.loginEmail = loginEmail.toLowerCase();
	}

	public String getLoginSenha() {
		return loginSenha;
	}

	public void setLoginSenha(String loginSenha) {
		this.loginSenha = loginSenha;
	}

	public String toString() {
		return "\nEmail: " + loginEmail + "\nSenha: " + loginSenha;
	}

}
