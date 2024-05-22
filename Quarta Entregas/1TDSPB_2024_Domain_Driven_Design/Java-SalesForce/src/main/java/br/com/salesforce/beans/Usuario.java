package br.com.salesforce.beans;

import java.time.LocalDate;
import java.time.Period;

public class Usuario {

	private int id;
	private String apelido;
	private String nome;
	private String sobrenome;
	private LocalDate nascimento;
	private String email;
	private String senha;


	public Usuario() {
		super();
	}

	
	


	public Usuario(int id, String apelido, String nome, String sobrenome, LocalDate nascimento, String email,
			String senha) {
		super();
		this.id = id;
		this.apelido = apelido;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.nascimento = nascimento;
		this.email = email;
		this.senha = senha;
	}





	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

	

	public String getApelido() {
		return apelido;
	}


	public void setApelido(String apelido) {
		this.apelido = apelido;
	}


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome.toUpperCase();
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome.toUpperCase();
	}


	public LocalDate getNascimento() {
		return nascimento;
	}

	public void setNascimento(LocalDate nascimento) {
		this.nascimento = nascimento;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email.toLowerCase();
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}



	public int getIdade() {
		LocalDate dataAtual = LocalDate.now();
		Period periodo = Period.between(nascimento, dataAtual);
		return periodo.getYears();
	}

	public String podeCadastar() {
		String informacao = "Usuario pode ser cadastrado";
		if (getIdade() >= 18) {
		} else {
			informacao = "USUARIO MENOR DE 18 ANOS NÃO PODE SER CADASTRADO";
		}
		return informacao;
	}

	public String toString() {
		return "Nome: " + nome + "\nApelido" + apelido + "\nSobrenome: " + sobrenome +  "\nData de nascimento: " + nascimento
				+ "\nTelefone: " + "\nEmail: " + email + "\nSenha: " + senha;
	}

}
