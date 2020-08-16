import {Core} from './core';
import {Fairings} from './fairings';
import {SecondStage} from './second-stage';

export interface Rocket {
  'rocket_id': string;
  'rocket_name': string;
  'rocket_type': string;
  'first_stage': {
    'cores': Array<Core>;
  };
  'second_stage': SecondStage;
  'fairings': Fairings;
}
