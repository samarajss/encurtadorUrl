import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../app/usuario';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class UsuarioService {

  private usuarioUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.usuarioUrl = 'http://localhost:8080/';
  }

  public findAll(){
    return this.http.get(`http://localhost:9091/usuario`).pipe(map(res => {
      return res as Usuario[];
    }));;
  }

  public save(usuario: Usuario) {
    return this.http.post<Usuario>(`http://localhost:9091/usuario`, usuario).pipe(map(response => {
      return response;
    })
  );;
  }

  public logar(usuario: Usuario){
    return this.http.post(`http://localhost:9091/login`, usuario).pipe(map(response => {
      return response;
    }));
  }

}
