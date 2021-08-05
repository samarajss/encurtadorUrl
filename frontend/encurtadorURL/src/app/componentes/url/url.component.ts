import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  textoUrl: String;
  mensagem = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private urlService: UrlService) {}

  ngOnInit() {}

  public encurtarUrl() {
    this.urlService.encurtar(this.textoUrl).subscribe(res => {
      setTimeout(() => {
        window.location.assign('/urlEncurtada');
      }, 500);

    }, error => {
      this.mensagem = 'Url incorreta';
    });
  }

}
