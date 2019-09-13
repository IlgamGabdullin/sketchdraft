import { TestBed } from '@angular/core/testing';

import { Fake3dService } from './fake3d.service';

describe('Fake3dService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Fake3dService = TestBed.get(Fake3dService);
    expect(service).toBeTruthy();
  });
});
