import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../usuario-service.service';
import { Usuario } from '../../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario: Usuario = new Usuario();
  logado = false;
  mensagem = '';

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() { }

      public efetuarLogin() {
        this.usuarioService.logar(this.usuario).subscribe(res => {
          this.logado = true;
          localStorage.setItem('usuarioLogado', JSON.stringify(this.usuario.id));
          this.mensagem = 'Logado com sucesso';
          setTimeout(() => {
            window.location.assign('/url');
          }, 500);

        }, error => {
          this.mensagem = 'E-mail e/ou senha incorreta';
        });
      }

      gotoUsuarioList() {
        this.router.navigate(['/usuarios']);
      }

}
