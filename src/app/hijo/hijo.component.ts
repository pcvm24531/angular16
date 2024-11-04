import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent {
  nombreHijo:string='Javier';
  //Este mensaje se recibe desde el padre
  @Input() apePaternoHijo:string ='';
  @Input() apeMaternoHijo:string='';
  @Input() recibeHijo?: string;//Colocamos '?' para indicar que puede ser vacio

  //Bloque que saca mensajes o datos
  @Output() messageEvent = new EventEmitter<string>();
  message:string = '';

  sendMessage(){
    this.messageEvent.emit( this.message );
  }
}
