package br.com.fiap.controller;

import java.sql.SQLException;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.fiap.bo.ContatoUsuarioBO;
import br.com.salesforce.beans.ContatoUsuario;

@RestController
@RequestMapping("/formulario")

public class FormularioController {

	public ContatoUsuarioBO contatoUsuarioBO = new ContatoUsuarioBO();

	@CrossOrigin(origins = "http://localhost:8081")
    @PostMapping
    public ResponseEntity<Void> cadastro(@RequestBody ContatoUsuario contato, UriComponentsBuilder uriBuilder)
            throws ClassNotFoundException, SQLException {
        contatoUsuarioBO.inserirBo(contato);
        return ResponseEntity.created(uriBuilder.path("/formulario/{id}").buildAndExpand(contato.getCep()).toUri()).build();
    }

    
}
