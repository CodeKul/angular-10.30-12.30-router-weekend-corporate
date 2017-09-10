import { Router } from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [NgbCarouselConfig]
})
export class DashComponent implements OnInit {

  usNm: string;
  page = 0;
  constructor(
    private config: NgbCarouselConfig,
    private actRt: ActivatedRoute,
    private router: Router
  ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    this.usNm = 'CodeKul';
  }

  ngOnInit() {
    //this.usNm = this.actRt.snapshot.params['usNm'];
    this.actRt.params.subscribe(rtPrms => this.usNm = rtPrms['usNm']);
    this.router.routerState.root.queryParams.subscribe(quPrm => this.page = quPrm['page']);
  }
}
