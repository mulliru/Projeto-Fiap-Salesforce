package br.com.salesforce.form;

import java.util.Scanner;

import br.com.salesforce.beans.Produto;

public class ProdutoForm {
	public Produto exibirFormulario() {
		
		Scanner scanner = new Scanner(System.in);

		System.out.println("\n=====================");
		System.out.println("---ENTRADA-PRODUTO--");
		System.out.println("=====================\n");
		
		System.out.print("Informe o numero do produto: ");
		int idProduto  = Integer.parseInt(scanner.nextLine());

		System.out.print("Informe o nome do produto: ");
		String nomeProduto = scanner.nextLine();
		
		System.out.print("Informe o tipo do produto: ");
		String tipoProduto = scanner.nextLine();
		
		System.out.print("Infome o valor do produto: ");
		Double valorProduto = Double.parseDouble(scanner.nextLine());
		
		Produto produto = new Produto();
		
		produto.setNumeroProduto(idProduto);
		produto.setNomeProduto(nomeProduto);
		produto.setTipoProduto(tipoProduto);
		produto.setValorProduto(valorProduto);;
		
		
		System.out.println(produto.toString());
		
		return produto;
	}
}
