import { Component, OnInit, Input } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from '../../url';

@Component({
  selector: 'app-listar-url',
  templateUrl: './listar-url.component.html',
  styleUrls: ['./listar-url.component.css']
})
export class ListarUrlComponent implements OnInit {


  idUsuario: any;
  @Input() urls: Url[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private urlService: UrlService) { }

  ngOnInit() {
    this.idUsuario = localStorage.getItem('usuarioLogado');
    this.urlService.buscarUrlPorId(this.idUsuario).subscribe(data => {
      this.urls = data;
    });
  }

}
