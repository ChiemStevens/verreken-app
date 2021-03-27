import { TestBed } from '@angular/core/testing';

import { SettlePaymentService } from './settle-payment.service';

describe('SettlePaymentService', () => {
  let service: SettlePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettlePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
