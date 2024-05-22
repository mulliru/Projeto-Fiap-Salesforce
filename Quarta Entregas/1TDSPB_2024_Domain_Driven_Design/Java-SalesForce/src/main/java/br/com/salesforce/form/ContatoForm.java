package br.com.salesforce.form;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Scanner;
import java.util.UUID;

import br.com.fiap.dao.ContatoUsuarioDAO;
import br.com.fiap.service.ViaCepService;
import br.com.salesforce.beans.ContatoUsuario;

public class ContatoForm {
	public ContatoUsuario exibirFormulario() throws IOException {
		
		Scanner scanner = new Scanner(System.in);

		System.out.println("\n=====================");
		System.out.println("--CONTATO--");
		System.out.println("=====================\n");
		
		
		System.out.print("Infome o seu nome: ");
		String nome = scanner.nextLine();
		
		System.out.print("Infome seu Telefone: ");
		String telefoneContato = scanner.nextLine();
		
		System.out.print("Infome o Email: ");
		String emailContato = scanner.nextLine();
		
		System.out.print("Infome o Cep: ");
		String cep = scanner.nextLine();
		
		ContatoUsuario contato = new ContatoUsuario();
		
		contato.setIdContato(UUID.randomUUID().toString());
		contato.setNome(nome);
		contato.setTelefoneContato(telefoneContato);
		contato.setEmailContato(emailContato);
		contato.setCep(cep);
		
		ViaCepService viaCepService = new ViaCepService();

        try {
            ContatoUsuario contatoUsuario = viaCepService.getContatoUsuario(cep);
            contato.setLougradoro(contatoUsuario.getLougradoro());
            contato.setLocalidade(contatoUsuario.getLocalidade());
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("ERRO AO CONSULTAR O CEP");
        }
		
		 try {
	            ContatoUsuarioDAO contatoUsuarioDAO = new ContatoUsuarioDAO();
	            contatoUsuarioDAO.inseir(contato); // Certifique-se de que este método está correto

	        } catch (ClassNotFoundException | SQLException e) {
	            e.printStackTrace();
	            System.out.println("ERRO NO CADASTRO DE CONTATO");
	        }
		
	
		
		System.out.println(contato.toString());
		
		return contato;
	
	}
}
