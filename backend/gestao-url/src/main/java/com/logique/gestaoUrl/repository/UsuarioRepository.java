package com.logique.gestaoUrl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.logique.gestaoUrl.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
	@Query("SELECT u FROM Usuario u WHERE u.login = :login AND u.senha = :senha")
    Usuario findByLoginAndSenha(String login, String senha);

}
