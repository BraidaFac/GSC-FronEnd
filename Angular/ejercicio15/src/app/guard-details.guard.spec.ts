import { TestBed } from '@angular/core/testing';

import { GuardDetailsGuard } from './guard-details.guard';

describe('GuardDetailsGuard', () => {
  let guard: GuardDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
