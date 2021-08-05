package com.logique.gestaoUrl.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String login;
    private String senha;
    
    public Usuario (long id, String login, String senha) {
    	this.id = id;
		this.login = login;
		this.senha = senha;
	}
    
    public Usuario () {}
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getLogin() {
		return login;
	}
	public String getSenha() {
		return senha;
	}
    
}
