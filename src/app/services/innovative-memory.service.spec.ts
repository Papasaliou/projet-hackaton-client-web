import { TestBed } from '@angular/core/testing';

import { InnovativeMemoryService } from './innovative-memory.service';

describe('InnovativeMemoryService', () => {
  let service: InnovativeMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnovativeMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
