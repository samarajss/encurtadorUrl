package com.logique.gestaoUrl.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.logique.gestaoUrl.model.Url;

public interface UrlRepository extends JpaRepository<Url, Long>{
	
	@Query("SELECT u FROM Url u WHERE u.idUsuario = :id")
    List<Url> urlByUsuario(long id);

}