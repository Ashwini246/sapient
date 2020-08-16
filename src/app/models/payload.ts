import {OrbitParams} from './orbit-params';

export interface Payload {
  'payload_id': string;
  'norad_id': Array<any>;
  'reused': boolean;
  'customers': Array<string>;
  'nationality': string;
  'manufacturer': string;
  'payload_type': string;
  'payload_mass_kg': number;
  'payload_mass_lbs': number;
  'orbit': string;
  'orbit_params': OrbitParams;
}
