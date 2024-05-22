package br.com.salesforce.beans;

import java.time.LocalDate;

public class Pedido {
	
	private int idPedido;
	private String nomeCliente;
	private LocalDate dataPedido;
	private double valorPedido;
	private Produto produto;

	public Pedido() {
		super();
	}

	public Pedido(int idPedido, String nomeCliente, LocalDate dataPedido, double valorPedido, Produto produto) {
		super();
		this.idPedido = idPedido;
		this.nomeCliente = nomeCliente;
		this.dataPedido = dataPedido;
		this.valorPedido = valorPedido;
		this.produto = produto;
	}

	public int getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(int idPedido) {
		this.idPedido = idPedido;
	}

	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}

	public LocalDate getDataPedido() {
		return dataPedido;
	}

	public void setDataPedido(LocalDate dataPedido) {
		this.dataPedido = dataPedido;
	}

	public double getValorPedido() {
		return valorPedido;
	}

	public void setValorPedido(double valorPedido) {
		this.valorPedido = valorPedido;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public String toString() {
		return "\nID so pedido: " + idPedido + "\nNome do Cliente: " + nomeCliente + "\nData do pedido: " + dataPedido
				+ "\nValor do pedido: " + valorPedido;
	}

}
