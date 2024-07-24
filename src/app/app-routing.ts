import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './all-components/all-components';
import './avatars-images/avatars-images';
import './calendar/calendar';
import './forms/forms';
import './radiogroup/radiogroup';
import './stepper/stepper';

export const routes: Route[] = [
  { path: '', component: 'app-all-components', name: 'AllComponents' },
  { path: 'all-components', component: 'app-all-components', name: 'AllComponents' },
  { path: 'avatars-images', component: 'app-avatars-images', name: 'Avatars-Images' },
  { path: 'calendar', component: 'app-calendar', name: 'Calendar' },
  { path: 'forms', component: 'app-forms', name: 'Forms' },
  { path: 'radiogroup', component: 'app-radiogroup', name: 'Radiogroup' },
  { path: 'stepper', component: 'app-stepper', name: 'Stepper' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
