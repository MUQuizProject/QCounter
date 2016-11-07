import { Component, OnInit } from '@angular/core';
import { StatService } from '../stat.service';
import { MnInterface } from '../qcinterface';


@Component({
  selector: 'app-up-down',
  templateUrl: './up-down.component.html',
  styleUrls: ['./up-down.component.scss']
})
export class UpDownComponent implements OnInit {
  right: number;
  miss: number;
  points: number;
  undo_stack: MnInterface[];

  constructor(private statService: StatService) {
    this.right = 0;
    this.miss = 0;
    this.points = 0;
    this.undo_stack = [];
  }
  ngOnInit() {
  }

  onIncreaseRight():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.right++;
    this.points++;
    this.statService.addStat({right: 1, miss: 0});
  }

  onIncreaseMiss():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.miss++;
    this.points = 0;
    this.statService.addStat({right: 0, miss: 1});
  }

  undo():void {
    if(this.undo_stack.length !== 0){
      var previous_points: MnInterface = this.undo_stack.pop();
      this.right = previous_points.right;
      this.miss  = previous_points.miss;
      this.points = previous_points.points;
      this.statService.undo();
    }
  }

  reset():void {
    this.right = 0;
    this.miss  = 0;
    this.points = 0;
    this.undo_stack = [];
  }
}
