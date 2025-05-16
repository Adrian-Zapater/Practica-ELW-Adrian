import { Routes } from '@angular/router';
import { MangaComponent } from './manga/manga.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';
import { MangaBusquedaComponent } from './manga-busqueda/manga-busqueda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CrearComponent } from './crear/crear.component';
import { PersonajesComponent } from './personajes/personajes.component';


export const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: ':titulo', component: MangaComponent},
  {path: 'listar/Mangas', component: ListaMangasComponent},
  {path: 'busqueda/:buscado', component: MangaBusquedaComponent},
  {path: 'contacto/Otabook', component: ContactoComponent},
  {path: 'listar/Favoritos', component: FavoritosComponent},
  {path: 'personaje/crear', component: CrearComponent},
  {path: 'personaje/listar', component: PersonajesComponent},
];
