import { Component, OnInit } from '@angular/core';
import {AdvertismentsService} from '../advertisments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  
  ads:any; 

  constructor(private advertiseService: AdvertismentsService) { }

  ngOnInit() {
  		this.ads = this.advertiseService.getAll();
  } <!--to make ads hold all data of advertisments -->

}
