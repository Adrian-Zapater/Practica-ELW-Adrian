import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker-heros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clicker-heros.component.html',
  styleUrl: './clicker-heros.component.css'
})

export class ClickerHerosComponent implements OnInit {
  buttons: { label: string, visible: boolean }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateButtons();
  }

  generateButtons(): void {
    const allLabels = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];
    const randomIndexes = this.getRandomIndexes(4, 9);

    for (let i = 0; i < 9; i++) {
      this.buttons.push({
        label: randomIndexes.includes(i) ? allLabels.pop()! : '',
        visible: randomIndexes.includes(i)
      });
    }
  }

  getRandomIndexes(numIndexes: number, maxIndex: number): number[] {
    const indexes: number[] = [];
    while (indexes.length < numIndexes) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }
}
