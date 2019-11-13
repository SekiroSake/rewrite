/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatterCreationService } from './matter-creation.service';

describe('Service: MatterCreation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatterCreationService]
    });
  });

  it('should ...', inject([MatterCreationService], (service: MatterCreationService) => {
    expect(service).toBeTruthy();
  }));
});
