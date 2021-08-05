import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../usuario'
import { UsuarioService } from '../../usuario-service.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @Input() usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.findAll().subscribe(data => {
      this.usuarios = data;
    });
  }

}
