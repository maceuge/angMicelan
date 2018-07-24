import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: string;

  constructor( private routerActive: ActivatedRoute) {
    this.routerActive.params.subscribe( param => {
      this.id = param['id'];
    });

    console.log(this.id);
   }

  ngOnInit() {
  }

}
