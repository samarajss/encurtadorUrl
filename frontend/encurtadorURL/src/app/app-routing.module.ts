import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './componentes/usuario-listar/usuario-list.component';
import { UsuarioFormComponent } from './componentes/usuario-form/usuario-form.component';
import { LoginComponent } from './componentes/login/login.component';
import { UrlComponent } from './componentes/url/url.component';
import { ListarUrlComponent } from './componentes/listar-url/listar-url.component';

const routes: Routes = [
  { path: 'url', component: UrlComponent },
  { path: 'urlEncurtada', component: ListarUrlComponent },
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'addusuario', component: UsuarioFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
