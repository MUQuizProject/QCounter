import { Component, OnInit, Input } from '@angular/core';
import { StatService } from '../stat.service';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  total_right: number;
  total_miss: number;

  constructor(private statService: StatService) {}

  ngOnInit() {
  }

  reset() {
    this.statService.reset();
  }
}
