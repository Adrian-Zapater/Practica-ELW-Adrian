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
  foto = input.required<string>();
}
