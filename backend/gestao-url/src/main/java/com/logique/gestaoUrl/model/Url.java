package com.logique.gestaoUrl.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Url {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String url;
    private String urlEncurtada;
    private long idUsuario;
    
    public Url (String url, String urlEncurtada, long idUsuario) {
		this.url = url;
		this.urlEncurtada = urlEncurtada;
		this.idUsuario = idUsuario;
	}
    
    public Url () {
    	
    }

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUrlEncurtada() {
		return urlEncurtada;
	}

	public void setUrlEncurtada(String urlEncurtada) {
		this.urlEncurtada = urlEncurtada;
	}

	public long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(long idUsuario) {
		this.idUsuario = idUsuario;
	}

}
