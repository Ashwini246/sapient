import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SpaceService } from '../space.service';
import { ServersideComponent } from './serverside.component';
describe('ServersideComponent', () => {
  let component: ServersideComponent;
  let fixture: ComponentFixture<ServersideComponent>;
  beforeEach(() => {
    const spaceServiceStub = () => ({
      getFilteredPrograms: payload => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ServersideComponent],
      providers: [{ provide: SpaceService, useFactory: spaceServiceStub }]
    });
    fixture = TestBed.createComponent(ServersideComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`allPrograms has default value`, () => {
    expect(component.allPrograms).toEqual([]);
  });
  it(`filteredProg has default value`, () => {
    expect(component.filteredProg).toEqual([]);
  });
  it(`years has default value`, () => {
    expect(component.years).toEqual([
      `2006`,
      `2007`,
      `2008`,
      `2009`,
      `2010`,
      `2011`,
      `2012`,
      `2013`,
      `2014`,
      `2015`,
      `2016`,
      `2017`,
      `2018`,
      `2019`,
      `2020`
    ]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getHeroes').and.callThrough();
      component.ngOnInit();
      expect(component.getHeroes).toHaveBeenCalled();
    });
  });
  describe('getHeroes', () => {
    it('makes expected calls', () => {
      const spaceServiceStub: SpaceService = fixture.debugElement.injector.get(
        SpaceService
      );
      spyOn(spaceServiceStub, 'getFilteredPrograms').and.callThrough();
      component.getHeroes();
      expect(spaceServiceStub.getFilteredPrograms).toHaveBeenCalled();
    });
  });
  describe('applyFilter', () => {
    it('makes expected calls', () => {
      const spaceServiceStub: SpaceService = fixture.debugElement.injector.get(
        SpaceService
      );
      spyOn(spaceServiceStub, 'getFilteredPrograms').and.callThrough();
      component.applyFilter();
      expect(spaceServiceStub.getFilteredPrograms).toHaveBeenCalled();
    });
  });
  describe('onChangeYear', () => {
    it('makes expected calls', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
      spyOn(component, 'onChangeYear').and.callThrough();
      component.onChangeYear('2008');
      expect(component.onChangeYear).toHaveBeenCalled();
    });
  });
  describe('onChangeLanding', () => {
    it('makes expected calls', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
      spyOn(component, 'onChangeLanding').and.callThrough();
      component.onChangeLanding(true);
      expect(component.onChangeLanding).toHaveBeenCalled();
    });
  });
  describe('onChangeLaunch', () => {
    it('makes expected calls', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
      spyOn(component, 'onChangeLaunch').and.callThrough();
      component.onChangeLaunch(true);
      expect(component.onChangeLaunch).toHaveBeenCalled();
    });
  });
  describe('onChangeYear', () => {
    it('makes expected calls with invalid year', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
      spyOn(component, 'onChangeYear').and.callThrough();
      console.log = jasmine.createSpy('log');
      component.onChangeYear('1998');
      expect(console.log).toHaveBeenCalledWith('Invalid year');
    });
  });
  describe('onChangeYear', () => {
    it('makes expected calls', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
      spyOn(component, 'onChangeYear').and.callThrough();
      console.log = jasmine.createSpy('log');
      component.onChangeYear(null);
      expect(console.log).toHaveBeenCalledWith('Invalid year');
    });
  });
  describe('onChangeLanding', () => {
    it('makes expected calls', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
      spyOn(component, 'onChangeLanding').and.callThrough();
      component.onChangeLanding(false);
      expect(component.onChangeLanding).toHaveBeenCalled();
    });
  });
  describe('onChangeLaunch', () => {
    it('makes expected calls', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
      spyOn(component, 'onChangeLaunch').and.callThrough();
      component.onChangeLaunch(false);
      expect(component.onChangeLaunch).toHaveBeenCalled();
    });
  });
});
