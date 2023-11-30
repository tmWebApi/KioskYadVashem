import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-user-mrssage',
  templateUrl: './user-mrssage.component.html',
  styleUrls: ['./user-mrssage.component.css']
})
export class UserMrssageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { numVisitors: string, time: string }) { }
}
