import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})

export class PadreComponent {
  nombrePadre:string = 'Pablo';
  apPaternoPadre:string = 'Vargas';
  apMaternoPadre:string = 'Morales';

  establecerApellido(){
    return this.apPaternoPadre;
  }
}
