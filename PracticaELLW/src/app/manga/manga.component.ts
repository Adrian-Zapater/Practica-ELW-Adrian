import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CapsaleraComponent } from '../capsalera/capsalera.component';
import { MangaService } from '../manga.service';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [CommonModule, CapsaleraComponent, RouterOutlet],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent implements OnInit{

    titulo: string = '';
    mangaData: any;
    esFavorito: boolean = false;

    private favoritosService = inject(FavoritosService);

    constructor(
      private route: ActivatedRoute,
      private mangaService: MangaService
    ) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.titulo = params['titulo'];
        });
        if (this.titulo) {
          this.mangaService.getMangaDataByTitol(this.titulo).then(manga => {
            this.mangaData = manga;
            this.favoritosService.esFavorito(this.titulo).subscribe((res: any) => {
              this.esFavorito = res && res.esFavorito;
            });
          });
        }
    }

    addToFavorites(): void {
      this.favoritosService.agregarFavorito(this.mangaData).subscribe(() => {
        this.esFavorito = true;
        this.favoritosService.cargarFavoritos();
      });
    }

    removeFromFavorites(): void {
      this.favoritosService.eliminarFavorito(this.mangaData.titol).subscribe(() => {
        this.esFavorito = false;
        this.favoritosService.cargarFavoritos();
      });
    }
}
