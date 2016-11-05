import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  right: number;
  miss: number;
  constructor() {
    this.right = 0;
    this.miss  = 0;
  }

  ngOnInit() {
  }

  onIncreaseRight():void { this.right++; }

  onDecreaseRight():void { if(this.right > 0) { this.right--; } }

  onIncreaseMiss():void { this.miss++; }

  onDecreaseMiss():void { if(this.miss > 0) { this.miss--; } }

  onReset():void {
    this.right = 0;
    this.miss  = 0;
  }
}
