import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';
  loading = false;

  prop = {
    color: true
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar () {
    this.loading = true;
    console.log(this.loading);
    let time = setTimeout( () => console.log(this.loading = false) , 3000);
  }

}
