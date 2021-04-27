import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input() name: string = "";
  @Input() age: string = "";
  @Input() hairColor: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
