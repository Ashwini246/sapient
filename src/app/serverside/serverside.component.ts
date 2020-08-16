import {Component, OnInit} from '@angular/core';
import {Programs} from '../models/programs';
import {SpaceService} from '../space.service';
import {SpaceInput} from '../models/space-input';
import {get} from 'lodash';

@Component({
  selector: 'app-serverside',
  templateUrl: './serverside.component.html',
  styleUrls: ['./serverside.component.scss']
})
export class ServersideComponent implements OnInit {

  allPrograms: Array<Programs> = [];
  filteredProg: Array<Programs> = [];
  launchYear: string;
  launchSuccess: boolean;
  landSuccess: boolean;
  years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  constructor(private spaceService: SpaceService) {
  }

  ngOnInit() {
    this.launchYear = '2006';
    this.getHeroes();
  }

  getHeroes(): void {
    const payload = {
      launchYear: 2006
    };
    this.spaceService.getFilteredPrograms(payload)
      .subscribe(programs => {
        this.filteredProg = programs;
      });
  }

  onChangeYear(val: string) {
    if (this.years.includes(val)) {
      this.launchYear = val;
      this.applyFilter();
    } else {
      console.log('Invalid year');
    }
  }

  onChangeLanding(val: boolean) {
    this.landSuccess = val;
    this.applyFilter();
  }

  onChangeLaunch(val: boolean) {
    this.launchSuccess = val;
    this.applyFilter();
  }

  applyFilter() {
    const payload = {
      launchYear: this.launchYear,
      successful_landing: this.landSuccess,
      successful_launch: this.launchSuccess
    };
    this.spaceService.getFilteredPrograms(payload)
      .subscribe(programs => {
        this.filteredProg = programs;
      });
  }

}
