package br.com.salesforce.form;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import br.com.salesforce.beans.Usuario;

public class DisplayMenu implements Display {
	
	@Override  
	public void exibir() throws IOException {
		 List<String> opcoesMenu = new ArrayList<>();
         
		 opcoesMenu.add("\n[ 0 ] - Sair");             
		 opcoesMenu.add("[ 1 ] - Cadastro");            
//		 opcoesMenu.add("[ 2 ] - Login");
//		 opcoesMenu.add("[ 3 ] - Pedido");
//		 opcoesMenu.add("[ 4 ] - Produto");
		 opcoesMenu.add("[ 2 ] - Contato");
		
		
		 Boolean exibindoMenu = true;               
         
		 Scanner scanner = new Scanner(System.in);  
		 
		 while (exibindoMenu) {
			 for (String op : opcoesMenu) {
				 System.out.println(op);
			 }
			 
			 System.out.print("Escolha uma opção para operar: ");  
			 String opcaoEscolhida = scanner.next();               
			 
			 switch (opcaoEscolhida) {
			 	case "0":
			 		exibindoMenu = false;
			 		System.out.println("Programa Fechado");
			 		break;
			 	case "1":
			 		CadastroUsuarioForm cadastroDisplay = new CadastroUsuarioForm();
			 		cadastroDisplay.exibirFormulario();
			 		break;
//			 	case "2":
//			 		LoginUsuarioForm loginDisplay = new LoginUsuarioForm();
//			 		loginDisplay.exibirFormulario();
//			 		break;
//			 		
//			 	case "3":
//			 		PedidoForm pedidoDisplay  = new PedidoForm();
//			 		pedidoDisplay.exibirFormulario();
//			 		break;
//			 	case "4":
//			 		ProdutoForm produtoDisplay = new ProdutoForm();
//			 		produtoDisplay.exibirFormulario();
//			 		break;
			 	case "2":
			 		ContatoForm contatoDisplay = new ContatoForm();
			 		contatoDisplay.exibirFormulario();
			 		break;
			 	default:                                                                 
			 	    System.out.println("\nOpção inválida, selecione um opção válida!!!");  
			 	    break;                                                               			 	                                                                          		
			 }
			 
		 }
		 
	}
}
