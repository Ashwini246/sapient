import {Payload} from './payload';

export interface SecondStage {
  'block': number;
  'payloads': Array<Payload>;
}
