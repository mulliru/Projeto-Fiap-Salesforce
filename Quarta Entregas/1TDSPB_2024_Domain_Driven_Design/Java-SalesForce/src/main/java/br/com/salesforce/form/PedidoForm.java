package br.com.salesforce.form;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

import br.com.salesforce.beans.Pedido;

public class PedidoForm {

	public Pedido exibirFormulario() {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("\n=====================");
		System.out.println("---ENTRADA-PEDIDO------");
		System.out.println("=====================\n");
		
		System.out.print("Infome o numero do pedido: ");
		int idpedido = Integer.parseInt(scanner.nextLine());

		System.out.print("Informe o nome do cliente: ");
		String nomeCliente = scanner.nextLine();

		System.out.print("Digite a data do pedido (no formato dd/MM/yyyy): ");
		String nascimentostr = scanner.nextLine();
		LocalDate dataPedido = LocalDate.parse(nascimentostr, DateTimeFormatter.ofPattern("dd/MM/yyyy"));

		System.out.print("Informe o valor: ");
		double valorPedido = Double.parseDouble(scanner.nextLine());

		Pedido pedido = new Pedido();

		pedido.setIdPedido(idpedido);
		pedido.setNomeCliente(nomeCliente);
		pedido.setDataPedido(dataPedido);
		pedido.setValorPedido(valorPedido);
		
		System.out.println(pedido.toString());

		return pedido;
	}

}
