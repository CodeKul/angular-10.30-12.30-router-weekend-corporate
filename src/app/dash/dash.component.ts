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
  constructor(
    private config: NgbCarouselConfig,
    private actRt: ActivatedRoute
  ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    this.usNm = 'CodeKul';
  }

  ngOnInit() {
    this.usNm = this.actRt.snapshot.params['usNm'];
    this.actRt.params.subscribe(rtPrms => this.usNm = rtPrms['usNm']);
  }
}
