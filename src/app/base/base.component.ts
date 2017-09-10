import { AnyWebService } from './any-web.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    private anySer: AnyWebService,
    private http: Http
  ) { }

  ngOnInit() {
    this.http.get('');
  }

}
