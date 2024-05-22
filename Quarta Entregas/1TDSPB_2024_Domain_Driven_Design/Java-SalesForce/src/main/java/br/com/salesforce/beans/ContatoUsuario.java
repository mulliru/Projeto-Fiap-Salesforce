package br.com.salesforce.beans;

public class ContatoUsuario {
	
	private String idContato;
	private String nome;
	private String telefoneContato;
	private String emailContato;
	private String cep;
	private String lougradoro;
	private String localidade;
	
	public ContatoUsuario() {
		super();
	}
	

	public ContatoUsuario(String idContato, String nome, String telefoneContato, String emailContato, String cep, String lougradoro, String localidade) {
		super();
		this.idContato = idContato;
		this.nome = nome;
		this.telefoneContato = telefoneContato;
		this.emailContato = emailContato;
		this.cep = cep;
		this.lougradoro = lougradoro;
		this.localidade = localidade;
	}


	public String getIdContato() {
		return idContato;
	}


	public void setIdContato(String idContato) {
		this.idContato = idContato;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getTelefoneContato() {
		return telefoneContato;
	}


	public void setTelefoneContato(String telefoneContato) {
		this.telefoneContato = telefoneContato;
	}


	public String getEmailContato() {
		return emailContato;
	}


	public void setEmailContato(String emailContato) {
		this.emailContato = emailContato;
	}
	
	

	public String getCep() {
		return cep;
	}


	public void setCep(String cep) {
		this.cep = cep;
	}
	
	
	public String getLougradoro() {
		return lougradoro;
	}


	public void setLougradoro(String lougradoro) {
		this.lougradoro = lougradoro;
	}
	
	public String getLocalidade() {
		return localidade;
	}


	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}


	public String toString(){
		return"\nCodigo: " + idContato + "\nNome: " + nome + "\nTelefone de contato: " + telefoneContato + "\nEmail: " + emailContato + "\nCEP: " + cep +
				"\nLougradoro: " + lougradoro + "\nLocalidade: " + localidade;
	}


	
}
