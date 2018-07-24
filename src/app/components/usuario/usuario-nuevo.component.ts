import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activeRouts: ActivatedRoute) { 

    this.activeRouts.parent.params.subscribe( param => {
      console.log('Aca llego el id: ' + param['id']);
    });
  }

  ngOnInit() {
  }

}
