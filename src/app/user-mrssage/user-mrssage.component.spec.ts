import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMrssageComponent } from './user-mrssage.component';

describe('UserMrssageComponent', () => {
  let component: UserMrssageComponent;
  let fixture: ComponentFixture<UserMrssageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMrssageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMrssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
