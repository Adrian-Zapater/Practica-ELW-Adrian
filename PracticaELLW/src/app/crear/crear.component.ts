import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  private personajesService = inject(PersonajesService);

  crearForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    autor: new FormControl('', [Validators.required, Validators.minLength(2)]),
    foto: new FormControl('', [Validators.required]),
    comics: new FormControl('', [])
  });

  onSubmit() {
    if (this.crearForm.valid) {
      const value = this.crearForm.value;
      const comicsArray = value.comics? value.comics.split(',').map((id: string) => id.trim()).filter((id: string) => id.length > 0): [];
      const body = {
        nom: value.nom,
        autor: value.autor,
        foto: value.foto,
        comics: comicsArray
      };
      this.personajesService.agregarPersonajes(body).subscribe({
        next: () => {
          window.location.reload();
        }
      });
    }
  }
}
