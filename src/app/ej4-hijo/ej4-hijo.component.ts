import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../_modelo/Persona';

@Component({
  selector: 'app-ej4-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ej4-hijo.component.html',
  styleUrl: './ej4-hijo.component.css'
})
export class Ej4HijoComponent {

  @Output() personaEnviar: EventEmitter<Persona> = new EventEmitter;

  nombre: string = "";
  edad: number = 0;

  enviarPersona() {
    let persona: Persona = {
      nombre: this.nombre,
      edad: this.edad
    }
    this.personaEnviar.emit(persona); // Emitir el evento con la persona
  }

}
