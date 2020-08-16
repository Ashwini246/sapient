import {Telemetry} from './telemetry';
import {Rocket} from './rocket';
import {LaunchSite} from './launch-site';
import {LaunchFailure} from './launch-failure';
import {Links} from './links';
import {Timeline} from './timeline';

export interface Programs {
  'flight_number': number;
  'mission_name': string;
  'mission_id': Array<any>;
  'upcoming': boolean;
  'launch_year': string;
  'launch_date_unix': number;
  'launch_date_utc': string;
  'launch_date_local': string;
  'is_tentative': boolean;
  'tentative_max_precision': string;
  'tbd': boolean;
  'launch_window': number;
  'rocket': Rocket;
  'ships': Array<any>;
  'telemetry': Telemetry;
  'launch_site': LaunchSite;
  'launch_success': boolean;
  'launch_failure_details': LaunchFailure;
  'links': Links;
  'details': string;
  'static_fire_date_utc': string;
  'static_fire_date_unix': number;
  'timeline': Timeline;
  'crew': string;
}
