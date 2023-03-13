import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWinComponent } from './view-win.component';

describe('ViewWinComponent', () => {
  let component: ViewWinComponent;
  let fixture: ComponentFixture<ViewWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
