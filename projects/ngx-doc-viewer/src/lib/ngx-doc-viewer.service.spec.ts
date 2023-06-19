import { TestBed } from '@angular/core/testing';

import { NgxDocViewerService } from './ngx-doc-viewer.service';

describe('NgxDocViewerService', () => {
  let service: NgxDocViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDocViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
