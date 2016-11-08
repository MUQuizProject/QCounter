import { Component, OnInit } from '@angular/core';
import { SimpleInterface } from "../qcinterface";
import { StatService } from "../stat.service";

@Component({
  selector   : 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls  : ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  right     : number;
  miss      : number;
  undo_stack: SimpleInterface[];

  constructor(private statService: StatService) {
    this.right      = 0;
    this.miss       = 0;
    this.undo_stack = [];
  }

  ngOnInit() {
  }

  onIncreaseRight():void {
    this.undo_stack.push({right: this.right, miss: this.miss});
    this.right++;
    this.statService.addStat({right: 1, miss: 0});
  }

  onIncreaseMiss():void {
    this.undo_stack.push({right: this.right, miss: this.miss});
    this.miss++;
    this.statService.addStat({right: 0, miss: 1});
  }

  reset():void {
    this.right      = 0;
    this.miss       = 0;
    this.undo_stack = [];
  }

  undo():void {
    if(this.undo_stack.length !== 0){
      var previous_points: SimpleInterface = this.undo_stack.pop();
      this.right = previous_points.right;
      this.miss  = previous_points.miss;
      this.statService.undo();
    }
  }
}
