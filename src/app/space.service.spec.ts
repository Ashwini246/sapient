import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SpaceService } from './space.service';
import { Programs } from './models/programs';
import { mockProgram } from './mock-prog';
describe('SpaceService', () => {
  let service: SpaceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpaceService]
    });
    service = TestBed.inject(SpaceService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify(); // Verifies that no requests are outstanding.
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('getPrograms', () => {
    let expectedprograms: Programs[];
    beforeEach(() => {

      // Dummy data to be returned by request.
      expectedprograms = mockProgram as Programs[];
    });


    it('makes expected calls', () => {
      service.getPrograms().subscribe(res => {
        expect(res).toEqual(expectedprograms);
      });
      const req = httpTestingController.expectOne('https://api.spaceXdata.com/v3/launches?limit=100');
      expect(req.request.method).toEqual('GET');
      req.flush(expectedprograms);
    });
  });
});
