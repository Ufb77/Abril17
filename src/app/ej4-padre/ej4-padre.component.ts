import { Component } from '@angular/core';
import { Persona } from '../_modelo/Persona';
import { Ej4HijoComponent } from '../ej4-hijo/ej4-hijo.component';

@Component({
  selector: 'app-ej4-padre',
  standalone: true,
  imports: [Ej4HijoComponent],
  templateUrl: './ej4-padre.component.html',
  styleUrl: './ej4-padre.component.css'
})
export class Ej4PadreComponent {

  listaPersonas: Persona[] = [];

  personasMostrar: Persona[] = []
  
  agregarPersona(persona: Persona){
    this.listaPersonas.push(persona);
  }

  recorrerLista(){
    this.personasMostrar = this.listaPersonas;
  }

  eliminarUltimoNombre(){
    this.listaPersonas.pop()
  }

  filtrarEdades(){


    this.personasMostrar = this.listaPersonas;

    this.personasMostrar = this.personasMostrar.filter(persona => persona.edad>= 18);

  }

  dobleEdad(){
    this.personasMostrar.forEach(persona => {
      
      persona.edad * 2;
    });
  }

}
