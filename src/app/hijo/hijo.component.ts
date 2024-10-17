import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent {

  //Este mensaje se recibe desde el padre
  @Input() recibeHijo:String ='';
}
