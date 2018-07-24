import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataRoute: ActivatedRoute) {

    this.dataRoute.data.subscribe( dataNav => {
      console.log(dataNav.message);
    });
  }

  ngOnInit() {
  }

}
