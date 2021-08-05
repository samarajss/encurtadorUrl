import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Url } from '../../app/url';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()
export class UrlService {

  constructor(protected http: HttpClient, private router: Router) { }

  public encurtar(urlOriginal: String){
    return this.http.post(`http://localhost:9091/encurtarUrl`, urlOriginal).pipe(res => {
      return res;
    });
  }

  public buscarUrlPorId(id: String){
    return this.http.get(`http://localhost:9091/urlEncurtadas/${id}`).pipe(map(res => {
      return res as Url[];
    }));
  }

}
