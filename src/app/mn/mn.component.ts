import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MnInterface } from '../qcinterface';
import { StatService } from '../stat.service';
import { configValidator } from './validator';

@Component({
  selector   : 'app-mn',
  templateUrl: './mn.component.html',
  styleUrls  : ['./mn.component.scss']
})
export class MnComponent implements OnInit {
  right     : number;
  miss      : number;
  points    : number;
  right_plus: number;
  miss_minus: number;
  undo_stack: MnInterface[];
  configForm: FormGroup;

  rightPlus = new FormControl("",Validators.compose([Validators.required, configValidator]));
  missMinus = new FormControl("",Validators.compose([Validators.required, configValidator]));

  constructor(fb:FormBuilder, private statService: StatService) {
    this.right      = 0;
    this.miss       = 0;
    this.points     = 0;
    this.right_plus = 1;
    this.miss_minus = 1;
    this.undo_stack = [];
    this.configForm = fb.group({
      rightPlus: this.rightPlus,
      missMinus: this.missMinus
    });
  }

  ngOnInit() {
  }

  onIncreaseRight():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.right++;
    this.points += this.right_plus;
    this.statService.addStat({right: 1, miss: 0});
  }

  onIncreaseMiss():void {
    this.undo_stack.push({right: this.right, miss: this.miss, points: this.points});
    this.miss++;
    this.points -= this.miss_minus;
    this.statService.addStat({right: 0, miss: 1});
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

  changeParameters(){
    console.log(this.configForm.value);
    this.right_plus = parseInt(this.configForm.value.rightPlus);
    this.miss_minus = parseInt(this.configForm.value.missMinus);
  }

  reset():void {
    this.right      = 0;
    this.miss       = 0;
    this.points     = 0;
    this.undo_stack = [];
  }
}
