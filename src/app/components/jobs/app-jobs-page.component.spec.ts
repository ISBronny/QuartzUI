import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJobsPageComponent } from './app-jobs-page.component';

describe('JobsComponent', () => {
  let component: AppJobsPageComponent;
  let fixture: ComponentFixture<AppJobsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppJobsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
