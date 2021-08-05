import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../usuario-service.service';
import { Usuario } from '../../usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {

  usuario: Usuario;

  constructor( private route: ActivatedRoute,
    private router: Router,
      private usuarioService: UsuarioService) {

        this.usuario = new Usuario();
      }

      onSubmit() {
        this.usuarioService.save(this.usuario).subscribe(result => this.gotoUsuarioList());
      }

      gotoUsuarioList() {
        this.router.navigate(['/usuarios']);
      }

}
