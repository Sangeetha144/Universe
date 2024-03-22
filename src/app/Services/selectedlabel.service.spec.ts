import { TestBed } from '@angular/core/testing';

import { SelectedlabelService } from './selectedlabel.service';

describe('SelectedlabelService', () => {
  let service: SelectedlabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedlabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
