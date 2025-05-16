import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private httpClient = inject(HttpClient);

  private baseUrl = 'http://localhost:3000/personajes';

  constructor() { }

  personajes = signal<any[]>([]);

  getPersonajes() {
    return this.httpClient.get<any>(`${this.baseUrl}/`);
  }

  agregarPersonajes(personaje: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/`, personaje);
  }

  cargarPersonajes() {
    this.httpClient.get<any[]>(`${this.baseUrl}/`).subscribe(pers => {
      this.personajes.set(pers);
    });
  }

  getComicsByPersonatge(nom: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/${encodeURIComponent(nom)}/comics`);
  }

}
