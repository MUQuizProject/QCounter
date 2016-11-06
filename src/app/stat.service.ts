import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import { StatInterface } from './qcinterface';

@Injectable()
export class StatService {
  total_right: number;
  total_miss: number;
  undo_stack: StatInterface[];

  constructor(){
    this.total_right = 0;
    this.total_miss = 0;
    this.undo_stack = [];
  }

  addStat(stat: StatInterface):void {
    this.undo_stack.push({right: this.total_right, miss: this.total_miss});
    this.total_right += stat.right;
    this.total_miss += stat.miss;
  }

  reset():void {
    this.total_right = 0;
    this.total_miss = 0;
  }

  undo():void {
    if(this.undo_stack.length !== 0){
      var previous_points: StatInterface = this.undo_stack.pop();
      this.total_right = previous_points.right;
      this.total_miss  = previous_points.miss;
    }
  }
}
