import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CapsaleraComponent } from './capsalera/capsalera.component';
import { TopfiveComponent } from './topfive/topfive.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { UltimosMangasComponent } from './ultimos-mangas/ultimos-mangas.component';
import { ListaUltimosMangasComponent } from './lista-ultimos-mangas/lista-ultimos-mangas.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';
import { TextoNovedadesComponent } from './texto-novedades/texto-novedades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { CrearComponent } from './crear/crear.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { PersonajesComponent } from './personajes/personajes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CapsaleraComponent, TopfiveComponent, NovedadesComponent,
    TextoNovedadesComponent, UltimosMangasComponent, ListaUltimosMangasComponent, ListaMangasComponent,
    ContactoComponent, FavoritosComponent, FavoritoComponent, CrearComponent, PersonajeComponent, PersonajesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaELLW';
}
