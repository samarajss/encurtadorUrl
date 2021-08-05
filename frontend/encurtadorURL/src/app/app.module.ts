import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioFormComponent } from './componentes/usuario-form/usuario-form.component';
import { UsuarioService } from './usuario-service.service';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './componentes/usuario-listar/usuario-list.component';
import { LoginComponent } from './componentes/login/login.component';
import { UrlComponent } from './componentes/url/url.component';
import { ListarUrlComponent } from './componentes/listar-url/listar-url.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    LoginComponent,
    UrlComponent,
    ListarUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
