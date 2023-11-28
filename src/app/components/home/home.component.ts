import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  numberVisitorsControl = new FormControl(0, [Validators.max(80), Validators.min(0)]);
  MAXVISITORS = 80;
  constructor() { }

  ngOnInit(): void {
    this.numberVisitorsControl.valueChanges.subscribe(newValue => {
     // console.log('New value:', newValue);
    });
  }

  addNum() {
    // const num = (Number)(this.numberVisitorsControl.value);
    // if (num!= null) {
    //   if (num < this.MAXVISITORS)
    //     this.numberVisitorsControl.setValue(num + 1)
    // }
    console.log('Button clicked');
  }

  subtractNum() {
    const num = this.numberVisitorsControl.value;
    if (num != null) {
      if (num > 0)
        this.numberVisitorsControl.setValue(num - 1)
    }
  }
  onEnterKeyPress() {
    console.log('Enter key pressed');

  }

}
