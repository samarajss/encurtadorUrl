package com.logique.gestaoUrl.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.logique.gestaoUrl.model.Url;
import com.logique.gestaoUrl.repository.UrlRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UrlController {

	@Autowired
    private UrlRepository urlRepository;
	
	@GetMapping("/urlEncurtadas/{idUsuario}")
    public List<Url> getUrl(@PathVariable("idUsuario") Long idUsuario) {
        return urlRepository.urlByUsuario(idUsuario);
    }
	
	@GetMapping("/encurtarUrl/{idUsuario}/{urlOriginal}")
	void addUrl(@PathVariable("urlOriginal") String urlOriginal, @PathVariable("idUsuario") long idUsuario) {
		String urlEncurtada=urlOriginal.replaceAll("[AEIOUaeiou ]", "");  
		Url url = new Url(urlOriginal, urlEncurtada, idUsuario );
		urlRepository.save(url);
	}
	
}
