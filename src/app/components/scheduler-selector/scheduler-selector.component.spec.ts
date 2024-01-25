import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerSelectorComponent } from './scheduler-selector.component';

describe('SchedulerSelectorComponent', () => {
  let component: SchedulerSelectorComponent;
  let fixture: ComponentFixture<SchedulerSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedulerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
