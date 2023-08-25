import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  activeDecrease = false;

  increase() {
    // this.counter = this.counter + 1;
    this.counter++;
  }

  decrease() {
    // this.counter = this.counter - 1;
    this.counter--;
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease;
  }
}