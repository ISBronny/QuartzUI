import { TestBed } from '@angular/core/testing';

import { SchedulersStoreService } from './schedulers-store.service';

describe('SchedulersStoreService', () => {
  let service: SchedulersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
