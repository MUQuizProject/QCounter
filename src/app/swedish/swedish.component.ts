import { Component, OnInit } from '@angular/core';
import { List } from "immutable";
import { SwedishInterface } from '../qcinterface';
import { StatService } from '../stat.service';
@Component({
  selector: 'app-swedish',
  templateUrl: './swedish.component.html',
  styleUrls: ['./swedish.component.scss']
})
export class SwedishComponent implements OnInit {
  right                  : number;
  miss                   : number;
  penalties              : number;
  undo_stack             : SwedishInterface[];
  switchover_array       : List<number>;
  penalty_increment_array: List<number>;

  constructor(private statService: StatService ) {
    this.right                   = 0;
    this.miss                    = 0;
    this.penalties               = 0;
    this.undo_stack              = [];
    this.switchover_array        = List.of<number>(0,1,3,6);
    this.penalty_increment_array = List.of<number>(1,2,3,4);
  }

  onIncreaseRight(){
    this.undo_stack.push({
      right    : this.right,
      miss     : this.miss,
      penalties: this.penalties
    });
    this.right++;
    this.statService.addStat({right: 1, miss: 0});
  }

  onIncreaseMiss(){
    this.undo_stack.push({
      right    : this.right,
      miss     : this.miss,
      penalties: this.penalties
    });
    this.miss++;
    this.statService.addStat({right: 0, miss: 1});
    this.penalties += this.getPenaltyIncrement();
  }

  getPenaltyIncrement():number {
    var j:number = this.switchover_array.filter(x => x <= this.right).size;
    return this.penalty_increment_array.get(j-1) ;
  }

  ngOnInit() {
  }

  undo():void {
    if(this.undo_stack.length !== 0){
      var previous_points: SwedishInterface = this.undo_stack.pop();
      this.right     = previous_points.right;
      this.miss      = previous_points.miss;
      this.penalties = previous_points.penalties;
      this.statService.undo();
    }
  }

  reset():void {
    this.right      = 0;
    this.miss       = 0;
    this.penalties  = 0;
    this.undo_stack = [];
  }

}
