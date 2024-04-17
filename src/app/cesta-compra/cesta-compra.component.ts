import { Component } from '@angular/core';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';

@Component({
  selector: 'app-cesta-compra',
  standalone: true,
  imports: [ListaProductosComponent],
  templateUrl: './cesta-compra.component.html',
  styleUrl: './cesta-compra.component.css'
})
export class CestaCompraComponent {

  
cesta: string[];

constructor(){
  this.cesta = []

  
}

addProducto(producto:string){
  this.cesta.push(producto)
}
}
