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

  mensajeDelPadre: string = 'Hola hijo mio como estas?';

  mensajeRecibido: string = '';

  establecerApellidoPaterno(){
    return this.apPaternoPadre;
  }
  establecerApellidoMaterno(){
    return "Osinaga";
  }

  resivedMessaFronChield($event: string){
    this.mensajeRecibido = $event;
  }

}
