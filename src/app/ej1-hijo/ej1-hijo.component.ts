import { Component, Input } from '@angular/core';
import { Ej1PadreComponent } from '../ej1-padre/ej1-padre.component';

@Component({
  selector: 'app-ej1-hijo',
  standalone: true,
  imports: [Ej1PadreComponent],
  templateUrl: './ej1-hijo.component.html',
  styleUrl: './ej1-hijo.component.css'
})
export class Ej1HijoComponent {

  @Input() mensajeH :string = "";

}
