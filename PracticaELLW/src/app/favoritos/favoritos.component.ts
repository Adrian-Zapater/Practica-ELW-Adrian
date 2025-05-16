import { Component, inject, OnInit, signal } from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritoComponent } from '../favorito/favorito.component';
import { Favorito } from '../models/Favorito';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [FavoritoComponent, RouterModule, CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  private favoritosService = inject(FavoritosService);

  favoritos = signal<Favorito[]>([]);

  ngOnInit(): void {
    this.favoritosService.getFavoritos().subscribe((favoritos:Favorito[]) => {
      this.favoritos.set(favoritos);
    });
  }
}
