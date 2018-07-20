import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p class="mt-5">
      Hola soy CssComponent
    </p>
  `,
  styles: [`
      
   p {
     color: red
   }
  
  `]
})
export class CssComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
