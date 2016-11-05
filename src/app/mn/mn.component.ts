import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MnInterface } from '../qcinterface';

@Component({
  selector: 'app-mn',
  templateUrl: './mn.component.html',
  styleUrls: ['./mn.component.scss']
})
export class MnComponent implements OnInit {
  right: number;
  miss: number;
  points: number;
  right_plus: number;
  miss_minus: number;
  undo_stack: MnInterface[];

  constructor() {
    this.right = 0;
    this.miss = 0;
    this.points = 0;
    this.right_plus = 1;
    this.miss_minus = 1;
    this.undo_stack = [];
  }

  ngOnInit() {
  }

  onIncreaseRight():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.right++;
    this.points += this.right_plus;
  }

  onIncreaseMiss():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.miss++;
    this.points -= this.miss_minus;
  }

  undo():void {
    if(this.undo_stack.length !== 0){
      var previous_points: MnInterface = this.undo_stack.pop();
      this.right = previous_points.right;
      this.miss  = previous_points.miss;
      this.points = previous_points.points;
    }
  }

  changeParameters(value:any){
    console.log(value);
    this.right_plus = parseInt(value.plus);
    this.miss_minus = parseInt(value.minus);
  }
}
