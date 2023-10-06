import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyquoteComponent } from './dailyquote.component';

describe('DailyquoteComponent', () => {
  let component: DailyquoteComponent;
  let fixture: ComponentFixture<DailyquoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyquoteComponent]
    });
    fixture = TestBed.createComponent(DailyquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
