import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaticsService } from '../services/statics.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  sessionId: String = '';
  userId: String = '';
  llocEvent: String = '';
  tipusEvent: 'visita' | 'click' = 'visita';
  createdAt: Date = new Date();

  constructor(private staticsService: StaticsService) {}

  ngOnInit(): void {
    this.postStatics(this.sessionId, this.userId, this.llocEvent, this.tipusEvent, this.createdAt);
  }

  async postStatics(usessionid: String, userid: String, llocevent: String, tipusevent: 'visita' | 'click', createdat: Date) {

  }

  async cargarUltimosMangas() {
    // Pasa la cantidad de mangas al método getMangues
    this.ultimosMangas = await this.mangaService.getMangues(this.cantidadMangas);
  }
