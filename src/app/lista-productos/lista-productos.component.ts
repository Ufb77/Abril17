import { Component, EventEmitter, Output } from '@angular/core';
import { CestaCompraComponent } from '../cesta-compra/cesta-compra.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CestaCompraComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  @Output()
  envio: EventEmitter<string> = new EventEmitter;
  productos:string[] = ["leche", "pan", "cafe", "azucar", "huevos", "plátanos"];


  addProductoCesta(producto:string){
    this.envio.emit(producto)
  }

}
