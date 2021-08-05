package com.logique.gestaoUrl.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.logique.gestaoUrl.model.Usuario;
import com.logique.gestaoUrl.repository.UsuarioRepository;
import com.logique.gestaoUrl.model.Url;
import com.logique.gestaoUrl.repository.UrlRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {
    
	@Autowired
    private UsuarioRepository usuarioRepository;
	@Autowired
    private UrlRepository urlRepository;
	
	@GetMapping("/popular")
	public void popular() {
		Usuario novoUsuario = new Usuario (1, "login1", "senha1");
		usuarioRepository.save(novoUsuario);
		Usuario novoUsuario2 = new Usuario (2, "login2", "senha2");
		usuarioRepository.save(novoUsuario2);
		Url novaUrl = new Url("www.google.com", "www.gle.com", 1);
		urlRepository.save(novaUrl);
	}

    @GetMapping("/usuario")
    public List<Usuario> getUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping("/usuario")
    void addUsuario(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
    }
    
    @PostMapping("/login")
	public Usuario efetuaLogin(@RequestBody Usuario usuario) {
		Usuario usuarioBanco = usuarioRepository.findByLoginAndSenha(usuario.getLogin(), usuario.getSenha());
        if (usuarioBanco == null) {
        	throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "E-mail e/ou senha estão incorretos.");
        }else{
        	return usuarioBanco;
        }
     }	 
}

