import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})

export class PadreComponent {
  nombrePadre:string = 'Pablo';
  apPaternoPadre:string = 'Vargas';
  apMaternoPadre:string = 'Morales';

  mensajeDelPadre: string = 'Hijo mio como estas?';

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

  //Enviamos mensaje dinamico al hijo
 enviarMensajeAHijo(){
  return this.mensajeDelPadre;
 }

}
