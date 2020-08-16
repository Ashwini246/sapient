import {Component, OnInit} from '@angular/core';
import {Programs} from '../models/programs';
import {SpaceService} from '../space.service';
import {SpaceInput} from '../models/space-input';
import {get} from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
    this.spaceService.getPrograms()
      .subscribe(programs => {
        this.allPrograms = programs;
        this.filteredProg = this.allPrograms.filter((program) => {
          return (program.launch_year ===  this.launchYear);
        });
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
    if (this.landSuccess && this.launchSuccess) {
      this.filteredProg = this.allPrograms.filter((program) => {
        return (program.launch_year === this.launchYear && program.launch_success === this.launchSuccess && get(program, 'rocket.first_stage.cores[0].land_success') === this.landSuccess);
      });
    } else if (this.landSuccess) {
      this.filteredProg = this.allPrograms.filter((program) => {
        return (program.launch_year === this.launchYear && get(program, 'rocket.first_stage.cores[0].land_success') === this.landSuccess);
      });
    } else if (this.launchSuccess) {
      this.filteredProg = this.allPrograms.filter((program) => {
        return (program.launch_year === this.launchYear && program.launch_success === this.launchSuccess);
      });
    } else if (this.landSuccess === false && this.launchSuccess === false) {
      this.filteredProg = this.allPrograms.filter((program) => {
        return (program.launch_year === this.launchYear && program.launch_success === this.launchSuccess && get(program, 'rocket.first_stage.cores[0].land_success') === this.landSuccess);
      });
    } else {
      this.filteredProg = this.allPrograms.filter((program) => {
        return (program.launch_year === this.launchYear);
      });
    }
  }
}
