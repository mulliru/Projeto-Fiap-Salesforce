package br.com.salesforce.beans;

public class Produto {
	
	private int idProduto;
	private String nomeProduto;
	private String tipoProduto;
	private double valorProduto;

	public Produto() {
		super();
	}

	public Produto(int idProduto, String nomeProduto, String tipoProduto, double valorProduto) {
		super();
		this.idProduto = idProduto;
		this.nomeProduto = nomeProduto;
		this.tipoProduto = tipoProduto;
		this.valorProduto = valorProduto;
	}

	public int getNumeroProduto() {
		return idProduto;
	}

	public void setNumeroProduto(int numeroProduto) {
		this.idProduto = numeroProduto;
	}

	public String getNomeProduto() {
		return nomeProduto;
	}

	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}

	public String getTipoProduto() {
		return tipoProduto;
	}

	public void setTipoProduto(String tipoProduto) {
		this.tipoProduto = tipoProduto;
	}

	public double getValorProduto() {
		return valorProduto;
	}

	public void setValorProduto(double valorProduto) {
		this.valorProduto = valorProduto;
	}

	public String toString() {
		return "\nNumero do produto: " + idProduto + "\nTipo do produto: " + tipoProduto + "\nValor do produto: "
				+ valorProduto;
	}

}
