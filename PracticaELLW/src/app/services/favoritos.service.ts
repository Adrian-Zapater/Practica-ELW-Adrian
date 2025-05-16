import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private httpClient = inject(HttpClient);

  private baseUrl = 'http://localhost:3000/favoritos';

  constructor() { }

  favoritos = signal<any[]>([]);

  esFavorito(titulo: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/esFavorito/${encodeURIComponent(titulo)}`);
  }

  agregarFavorito(manga: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/`, manga);
  }

  eliminarFavorito(titulo: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${encodeURIComponent(titulo)}`);
  }

  cargarFavoritos() {
    this.httpClient.get<any[]>(`${this.baseUrl}/`).subscribe(favs => {
      this.favoritos.set(favs);
    });
  }
}
