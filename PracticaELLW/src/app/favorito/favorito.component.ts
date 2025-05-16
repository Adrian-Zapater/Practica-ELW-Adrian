import { Component, input } from '@angular/core';

@Component({
  selector: 'app-favorito',
  standalone: true,
  imports: [],
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.css'
})
export class FavoritoComponent {
  titol = input.required<string>();
  autor = input.required<string>();
  caps = input.required<number>();
  foto = input.required<string>();
  sinopsis = input.required<string>();
}
