import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { Ej1PadreComponent } from './ej1-padre/ej1-padre.component';
import { Ej1HijoComponent } from './ej1-hijo/ej1-hijo.component';

import { CestaCompraComponent } from './cesta-compra/cesta-compra.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ej1HijoComponent, Ej1PadreComponent, CestaCompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril17';
}
