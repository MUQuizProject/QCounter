import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MnInterface } from '../qcinterface';
import { configValidator } from './validator';
import { StatService } from '../stat.service';

@Component({
  selector   : 'app-by',
  templateUrl: './by.component.html',
  styleUrls  : ['./by.component.scss']
})
export class ByComponent implements OnInit {
  right       : number;
  miss        : number;
  points      : number;
  miss_initial: number;
  undo_stack  : MnInterface[];
  configForm  : FormGroup;

  missInitial = new FormControl("",Validators.compose([Validators.required, configValidator]));

  constructor(fb:FormBuilder, private statService: StatService) {
    this.right        = 0;
    this.miss         = 0;
    this.points       = 0;
    this.miss_initial = 10;
    this.undo_stack   = [];
    this.configForm   = fb.group({
      missInitial: this.missInitial
    });
  }

  ngOnInit() {
  }

  onIncreaseRight():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.right++;
    this.statService.addStat({right: 1, miss: 0});
    this.calculate();
  }

  onIncreaseMiss():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.miss++;
    this.statService.addStat({right: 0, miss: 1});
    this.calculate();
  }

  undo():void {
    if(this.undo_stack.length !== 0){
      var previous_points: MnInterface = this.undo_stack.pop();
      this.right  = previous_points.right;
      this.miss   = previous_points.miss;
      this.points = previous_points.points;
      this.statService.undo();
    }
  }

  changeParameters():void {
    console.log(this.configForm.value);
    this.miss_initial = parseInt(this.configForm.value.missInitial);
  }

  reset():void {
    this.right      = 0;
    this.miss       = 0;
    this.points     = 0;
    this.undo_stack = [];
  }

  private calculate():void {
    this.points = this.right * (this.miss_initial - this.miss)
  }
}
