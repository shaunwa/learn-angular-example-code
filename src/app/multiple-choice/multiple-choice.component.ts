import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
  @Output() a = new EventEmitter<void>();
  @Output() b = new EventEmitter<void>();
  @Output() c = new EventEmitter<void>();
  @Output() d = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  aClicked(): void {
    this.a.emit();
  }

  bClicked(): void {
    this.b.emit();
  }

  cClicked(): void {
    this.c.emit();
  }

  dClicked(): void {
    this.d.emit();
  }
}
