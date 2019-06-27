import { FrameworkConfigService } from './../services/framwork-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit { 

  constructor(private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}
