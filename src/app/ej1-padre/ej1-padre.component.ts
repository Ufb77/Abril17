import { Component } from '@angular/core';

import { Ej1HijoComponent } from '../ej1-hijo/ej1-hijo.component';

@Component({
    selector: 'app-ej1-padre',
    standalone: true,
    templateUrl: './ej1-padre.component.html',
    styleUrl: './ej1-padre.component.css',
    imports: [Ej1HijoComponent]
})
export class Ej1PadreComponent {

  mensajePadre: string = "hola hijo";
}
