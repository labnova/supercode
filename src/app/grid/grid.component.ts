import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  numbers: number[] = [];
  selectedNumbers: number[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 90; i++) {
      this.numbers.push(i);
1   }
  }

  isSelected(num: number): boolean {
    return this.selectedNumbers.includes(num);
  }

  toggleSelection(num: number): void {
    if(this.isSelected(num)) {
      this.selectedNumbers = this.selectedNumbers.filter(n => n != num);
    } else {
      this.selectedNumbers.push(num);
    }
  }
}
