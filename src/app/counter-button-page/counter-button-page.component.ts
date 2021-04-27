import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-button-page',
  templateUrl: './counter-button-page.component.html',
  styleUrls: ['./counter-button-page.component.css'],
})
export class CounterButtonPageComponent implements OnInit {
  count: number = 0;
  threshold: number = 5;
  showCounterButton: boolean = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  incrementCount(): void {
    this.count += 1;
    if (this.count > this.threshold) {
      this.router.navigateByUrl('/event-handling');
    }
  }

  toggleCounterButton(): void {
    this.showCounterButton = !this.showCounterButton;
  }
}
