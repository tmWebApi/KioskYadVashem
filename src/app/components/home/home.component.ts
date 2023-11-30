import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  numberVisitorsControl = new FormControl(0, [Validators.required, Validators.max(80), Validators.min(0)]);
  MAXVISITORS = 80;
  pressEnter = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.onEnterKeyPress = this.onEnterKeyPress.bind(this);

  }

  ngOnInit(): void {
    document.addEventListener('keydown', this.onEnterKeyPress);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onEnterKeyPress);
  }

  onEnterKeyPress() {
    this.pressEnter = true;
    console.log('Enter key pressed', this.pressEnter);
    this.router.navigate([`home/schedule`,this.numberVisitorsControl.value]);
    this.pressEnter = false;
  }
  addNum() {
    if (!this.pressEnter) {
      const num = (Number)(this.numberVisitorsControl.value);
      if (num != null) {
        if (num < this.MAXVISITORS)
          this.numberVisitorsControl.setValue(num + 1)
      }
    }
    else
      this.pressEnter = false
  }

  subtractNum() {
    if (!this.pressEnter) {
      const num = this.numberVisitorsControl.value;
      if (num != null) {
        if (num > 0)
          this.numberVisitorsControl.setValue(num - 1)
      }
    }
    else
      this.pressEnter = false
  }

}
